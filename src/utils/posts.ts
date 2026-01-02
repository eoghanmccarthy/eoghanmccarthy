import { z } from "zod";
import { POST_TYPES, CATEGORIES, TAGS } from "@/constants";

import { parseFrontmatter } from "./parse-frontmatter";
import { extractExcerpt } from "./extract-excerpt";

const PostSchema = z.object({
  slug: z.string(),
  type: z.enum(POST_TYPES),
  title: z.string().optional(),
  date: z.string(),
  category: z.enum(CATEGORIES).optional(),
  description: z.string().optional(),
  featuredImage: z.string().optional(),
  tags: z.array(z.enum(TAGS)).optional(),
  content: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

function createPostFromData(
  slug: string,
  data: Record<string, string>,
  content: string,
): Post {
  const type = data.type || POST_TYPES[0];

  // Parse and validate tags
  const tags = data.tags
    ?.split(",")
    .map((t) => t.trim())
    .filter((t) => TAGS.includes(t as any));

  // Build raw post data
  const rawPost = {
    slug,
    type,
    title: type === "blog" ? data.title || slug : data.title,
    date: data.date || "",
    category: data.category,
    description:
      type === "blog" ? data.description || extractExcerpt(content) : data.description,
    featuredImage: data.featuredImage,
    tags: tags && tags.length > 0 ? tags : undefined,
    content,
  };

  // Validate with Zod
  const result = PostSchema.safeParse(rawPost);

  if (!result.success) {
    console.error(`Validation error for post "${slug}":`, result.error);
    // Return a minimal valid post as fallback
    return {
      slug,
      type: POST_TYPES[0],
      date: data.date || "",
      content,
    };
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
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
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
