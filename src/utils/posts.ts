import { z } from "zod";
import {
  POST_TYPES,
  CATEGORIES,
  TAGS,
  AUTHORS,
  POST_STATUS,
} from "@/constants";

import { parseFrontmatter } from "./parse-frontmatter";
import { extractExcerpt } from "./extract-excerpt";

export function generateShortId() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 6);
  return timestamp + random;
}

const PostSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
  type: z.enum(POST_TYPES),
  status: z.enum(POST_STATUS),
  category: z.enum(CATEGORIES).nullable(),
  author: z.enum(AUTHORS),
  title: z.string(),
  description: z.string(),
  featuredImage: z.string().nullable(),
  tags: z.array(z.enum(TAGS)),
  content: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

function createPostFromData(
  id: string,
  data: Record<string, string>,
  content: string,
): Post | null {
  const type = data.type || POST_TYPES[0];

  let tagsString = data.tags || "";
  if (tagsString.startsWith("[") && tagsString.endsWith("]")) {
    tagsString = tagsString.slice(1, -1); // Remove brackets
  }
  const tags = tagsString
    .split(",")
    .map((t) => t.trim())
    .filter((t) => TAGS.includes(t as any));

  // Build raw post data with defaults
  const rawPost = {
    id,
    type,
    title: type === "blog" ? data.title : "",
    author:
      data.author && AUTHORS.includes(data.author as any)
        ? data.author
        : AUTHORS[0],
    status:
      data.status && POST_STATUS.includes(data.status as any)
        ? data.status
        : POST_STATUS[0],
    createdAt: data.createdAt,
    updatedAt: data.updatedAt || null,
    category: data.category || null,
    description:
      type === "blog" ? data.description || extractExcerpt(content) : "",
    featuredImage: data.featuredImage || null,
    tags: tags && tags.length > 0 ? tags : [],
    content,
  };

  // Validate with Zod
  const result = PostSchema.safeParse(rawPost);

  if (!result.success) {
    console.error(`Validation error for post "${id}":`, result.error);
    return null;
  }

  return result.data;
}

export async function loadPosts(): Promise<Post[]> {
  const modules = import.meta.glob("../posts/*.md", {
    query: "?raw",
    import: "default",
  });

  const postPromises = Object.entries(modules).map(
    async ([path, loadModule]) => {
      const rawContent = (await loadModule()) as string;
      const { data, content } = parseFrontmatter(rawContent);
      const id = path.split("/").pop()?.replace(".md", "") || "";

      return createPostFromData(id, data, content);
    },
  );

  const posts = await Promise.all(postPromises);
  return posts
    .filter((post): post is Post => post !== null)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
}

export async function loadPost(id: string): Promise<Post | null> {
  try {
    const modules = import.meta.glob("../posts/*.md", {
      query: "?raw",
      import: "default",
    });
    const path = `../posts/${id}.md`;

    if (modules[path]) {
      const rawContent = (await modules[path]()) as string;
      const { data, content } = parseFrontmatter(rawContent);

      return createPostFromData(id, data, content);
    }

    return null;
  } catch (error) {
    console.error("Error loading post:", error);
    return null;
  }
}
