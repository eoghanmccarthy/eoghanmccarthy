import handler from "@tanstack/react-start/server-entry";
import { createServerEntry } from "@tanstack/react-start/server-entry";
import { Hono } from "hono";
import type { Context, Next } from "hono";
import { cors } from "hono/cors";
import type { R2Bucket } from "@cloudflare/workers-types";

import {
  generateShortId,
  updatePostStatus,
  generateFrontmatter,
  validateImage,
  ImageValidationError,
} from "@/server/utils.ts";

type Bindings = {
  STORAGE: R2Bucket;
  AUTH_KEY_SECRET: string;
  GITHUB_TOKEN: string;
  GITHUB_REPO: string;
  GITHUB_OWNER: string;
  ENVIRONMENT?: string;
  R2_PUBLIC_URL: string;
};

const AUTHORIZED_METHODS = ["POST", "PUT", "PATCH", "DELETE"];

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
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

  // Require auth for modifying methods
  if (AUTHORIZED_METHODS.includes(method)) {
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

// Create post with optional image
app.post("/api/posts/create", async (c) => {
  try {
    const formData = await c.req.formData();

    // Extract post fields from FormData
    const content = formData.get("content") as string | null;
    const title = formData.get("title") as string | null;
    const type = (formData.get("type") as string) || "note";
    const status = (formData.get("status") as string) || "published";
    const author = (formData.get("author") as string) || "eoghan";
    const category = (formData.get("category") as string) || null;
    const description = (formData.get("description") as string) || "";
    const tagsString = (formData.get("tags") as string) || "";
    const message = formData.get("message") as string | null;
    const branch = (formData.get("branch") as string) || "main";
    const featuredImage = formData.get("featuredImage") as File | null;

    if (!content) {
      return c.json({ error: "content is required" }, 400);
    }

    // Generate post ID
    const id = generateShortId();

    // Handle optional image upload
    let imageUrl: string | null = null;
    if (featuredImage) {
      // Validate image
      try {
        validateImage(featuredImage);
      } catch (error) {
        if (error instanceof ImageValidationError) {
          return c.json(
            {
              error: error.message,
              message: error.details,
            },
            400,
          );
        }
        throw error;
      }

      // Generate filename with post ID prefix
      const fileExtension = featuredImage.name.split(".").pop() || "jpg";
      const filename = `images/${id}-featured.${fileExtension}`;

      // Upload to R2
      const arrayBuffer = await featuredImage.arrayBuffer();
      const uploadResult = await c.env.STORAGE.put(filename, arrayBuffer, {
        httpMetadata: {
          contentType: featuredImage.type,
          cacheControl: "max-age=31536000", // 1 year cache
        },
      });

      if (!uploadResult) {
        return c.json(
          {
            error: "Failed to upload image to R2",
            message: "R2 put operation returned null",
          },
          500,
        );
      }

      imageUrl = `${c.env.R2_PUBLIC_URL}/${filename}`;
    }

    // Parse tags
    const tags = tagsString
      ? tagsString
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : [];

    // Generate frontmatter
    const frontmatter = generateFrontmatter({
      id,
      type,
      status,
      author,
      title,
      category,
      description,
      featuredImage: imageUrl,
      tags,
    });

    // Combine frontmatter + content
    const fullContent = `${frontmatter}\n\n${content}`;

    // Use id as filename
    const sanitizedFilename = id.endsWith(".md") ? id : `${id}.md`;

    // GitHub API endpoint for creating file
    const path = `src/posts/${sanitizedFilename}`;
    const url = `https://api.github.com/repos/${c.env.GITHUB_OWNER}/${c.env.GITHUB_REPO}/contents/${path}`;

    // Create file (this endpoint is for new posts only)
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${c.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "Cloudflare-Worker",
      },
      body: JSON.stringify({
        message: message || `Add ${id}`,
        content: btoa(fullContent),
        branch,
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
      id,
      path,
      url: result.content.html_url,
      imageUrl,
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

// Upload image to R2
app.post("/api/images/upload", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return c.json({ error: "No image file provided" }, 400);
    }

    // Validate image
    try {
      validateImage(file);
    } catch (error) {
      if (error instanceof ImageValidationError) {
        return c.json(
          {
            error: error.message,
            message: error.details,
          },
          400,
        );
      }
      throw error;
    }

    // Generate unique filename with folder organization
    const timestamp = Date.now();
    const randomId = generateShortId();
    const fileExtension = file.name.split(".").pop() || "jpg";
    const filename = `images/${timestamp}-${randomId}.${fileExtension}`;

    // Upload to R2
    const arrayBuffer = await file.arrayBuffer();
    const uploadResult = await c.env.STORAGE.put(filename, arrayBuffer, {
      httpMetadata: {
        contentType: file.type,
        cacheControl: "max-age=31536000", // 1 year cache
      },
    });

    // Verify upload succeeded
    if (!uploadResult) {
      return c.json(
        {
          error: "Failed to upload to R2",
          message: "R2 put operation returned null",
        },
        500,
      );
    }

    // Construct public URL
    const publicUrl = `${c.env.R2_PUBLIC_URL}/${filename}`;

    return c.json({
      success: true,
      url: publicUrl,
      filename,
      size: file.size,
      type: file.type,
    });
  } catch (error) {
    return c.json(
      {
        error: "Failed to upload image",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      500,
    );
  }
});

// Update post status
app.patch("/api/posts/:id/status", async (c) => {
  try {
    const id = c.req.param("id");
    const { status } = await c.req.json();

    if (!status) {
      return c.json({ error: "status is required" }, 400);
    }

    const filename = id.endsWith(".md") ? id : `${id}.md`;
    const path = `src/posts/${filename}`;
    const url = `https://api.github.com/repos/${c.env.GITHUB_OWNER}/${c.env.GITHUB_REPO}/contents/${path}`;

    // Fetch existing file
    const getResponse = await fetch(url, {
      headers: {
        Authorization: `Bearer ${c.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Cloudflare-Worker",
      },
    });

    if (!getResponse.ok) {
      return c.json({ error: "Post not found" }, 404);
    }

    const existingFile = (await getResponse.json()) as {
      content: string;
      sha: string;
    };

    // Decode existing content
    const existingContent = atob(existingFile.content);

    // Parse frontmatter and update status
    const frontmatterMatch = existingContent.match(
      /^---\n([\s\S]*?)\n---\n([\s\S]*)$/,
    );
    if (!frontmatterMatch) {
      return c.json({ error: "Invalid markdown format" }, 400);
    }

    const frontmatter = frontmatterMatch[1];
    const content = frontmatterMatch[2];

    // Update status and updated timestamp in frontmatter
    const now = new Date().toISOString();
    const updatedFrontmatter = updatePostStatus(frontmatter, status, now);

    const updatedContent = `---\n${updatedFrontmatter}\n---\n${content}`;

    // Upload updated file
    const updateResponse = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${c.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "Cloudflare-Worker",
      },
      body: JSON.stringify({
        message: `Update ${id} status to ${status}`,
        content: btoa(updatedContent),
        sha: existingFile.sha,
      }),
    });

    if (!updateResponse.ok) {
      const error = await updateResponse.text();
      return c.json(
        {
          error: "Failed to update post",
          details: error,
        },
        500,
      );
    }

    const result = (await updateResponse.json()) as {
      content: { html_url: string };
    };

    return c.json({
      success: true,
      id,
      status,
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
