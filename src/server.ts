import handler from "@tanstack/react-start/server-entry";
import { createServerEntry } from "@tanstack/react-start/server-entry";
import { Hono } from "hono";
import type { Context, Next } from "hono";
import { cors } from "hono/cors";
import type { R2Bucket } from "@cloudflare/workers-types";

type Bindings = {
  STORAGE: R2Bucket;
  AUTH_KEY_SECRET: string;
  GITHUB_TOKEN: string;
  GITHUB_REPO: string;
  GITHUB_OWNER: string;
  ENVIRONMENT?: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "X-Custom-Auth-Key"],
  }),
);

// Health check endpoint
app.get("/api/ping", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: c.env.ENVIRONMENT || "production",
  });
});

// Auth middleware for protected routes
const authMiddleware = async (
  c: Context<{ Bindings: Bindings }>,
  next: Next,
) => {
  const method = c.req.method;

  // Require auth for POST, PUT, DELETE (skip GET for public endpoints)
  if (method === "POST" || method === "PUT" || method === "DELETE") {
    const headerValue = c.req.header("X-Custom-Auth-Key");
    const expectedValue = c.env.AUTH_KEY_SECRET;

    if (headerValue !== expectedValue) {
      return c.text("Forbidden", 403);
    }
  }

  await next();
};

// Apply auth to all /api routes
app.use("/api/*", authMiddleware);

// Upload markdown file to GitHub repo
app.post("/api/posts/upload", async (c) => {
  try {
    const body = await c.req.json();
    const { filename, content, message, branch = "main" } = body;

    if (!filename || !content) {
      return c.json({ error: "filename and content are required" }, 400);
    }

    // Ensure filename ends with .md
    const sanitizedFilename = filename.endsWith(".md")
      ? filename
      : `${filename}.md`;

    // GitHub API endpoint for creating/updating files
    const path = `src/posts/${sanitizedFilename}`;
    const url = `https://api.github.com/repos/${c.env.GITHUB_OWNER}/${c.env.GITHUB_REPO}/contents/${path}`;

    // Check if file exists to get SHA (required for updates)
    let sha: string | undefined;
    try {
      const checkResponse = await fetch(url, {
        headers: {
          Authorization: `Bearer ${c.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Cloudflare-Worker",
        },
      });

      if (checkResponse.ok) {
        const existingFile = (await checkResponse.json()) as {
          sha: string;
        };
        sha = existingFile.sha;
      }
    } catch (e) {
      // File doesn't exist, that's ok
    }

    // Create or update file
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${c.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "Cloudflare-Worker",
      },
      body: JSON.stringify({
        message: message || `Upload ${sanitizedFilename}`,
        content: btoa(content), // Base64 encode the content
        branch,
        ...(sha && { sha }), // Include SHA if updating
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return c.json(
        {
          error: "Failed to upload to GitHub",
          details: error,
          status: response.status,
        },
        500,
      );
    }

    const result = (await response.json()) as {
      content: { html_url: string };
    };
    return c.json({
      success: true,
      path,
      url: result.content.html_url,
    });
  } catch (error) {
    return c.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      500,
    );
  }
});

// 404 handler for unknown API routes
app.all("/api/*", (c) => {
  return c.json({ error: "API endpoint not found" }, 404);
});

app.all("*", async (c) => {
  return handler.fetch(c.req.raw);
});

export default createServerEntry({
  fetch: app.fetch,
});
