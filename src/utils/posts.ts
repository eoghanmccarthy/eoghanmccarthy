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

const PostSchema = z.object({
  slug: z.string(),
  type: z.enum(POST_TYPES),
  title: z.string(),
  author: z.enum(AUTHORS),
  status: z.enum(POST_STATUS),
  created: z.string(),
  updated: z.string().nullable(),
  category: z.enum(CATEGORIES).nullable(),
  description: z.string(),
  featuredImage: z.string().nullable(),
  tags: z.array(z.enum(TAGS)),
  content: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

function createPostFromData(
  slug: string,
  data: Record<string, string>,
  content: string,
): Post | null {
  const type = data.type || POST_TYPES[0];

  // Parse and validate tags from array format: [tag1, tag2, tag3]
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
    slug,
    type,
    title: type === "blog" ? data.title || slug : "",
    author:
      data.author && AUTHORS.includes(data.author as any)
        ? data.author
        : AUTHORS[0],
    status:
      data.status && POST_STATUS.includes(data.status as any)
        ? data.status
        : POST_STATUS[0],
    created: data.created,
    updated: data.updated || null,
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
    console.error(`Validation error for post "${slug}":`, result.error);
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
      const slug = path.split("/").pop()?.replace(".md", "") || "";

      return createPostFromData(slug, data, content);
    },
  );

  const posts = await Promise.all(postPromises);
  return posts
    .filter((post): post is Post => post !== null)
    .sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
    );
}

export async function loadPost(slug: string): Promise<Post | null> {
  try {
    const modules = import.meta.glob("../posts/*.md", {
      query: "?raw",
      import: "default",
    });
    const path = `../posts/${slug}.md`;

    if (modules[path]) {
      const rawContent = (await modules[path]()) as string;
      const { data, content } = parseFrontmatter(rawContent);

      return createPostFromData(slug, data, content);
    }

    return null;
  } catch (error) {
    console.error("Error loading post:", error);
    return null;
  }
}
