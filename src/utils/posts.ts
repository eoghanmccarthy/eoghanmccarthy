import { parseFrontmatter } from "./parse-frontmatter";
import { extractExcerpt } from "./extract-excerpt";

export interface Post {
  slug: string;
  type: "blog" | "note";
  title?: string;
  date: string;
  category?: string;
  description?: string;
  featuredImage?: string;
  content: string;
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

      const type = (data.type as "blog" | "note") || "blog";

      return {
        slug,
        type,
        title: type === "blog" ? data.title || slug : data.title,
        date: data.date || "",
        category: type === "blog" ? data.category || "General" : data.category,
        description:
          type === "blog"
            ? data.description || extractExcerpt(content)
            : data.description,
        featuredImage: data.featuredImage,
        content,
      };
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

      const type = (data.type as "blog" | "note") || "blog";

      return {
        slug,
        type,
        title: type === "blog" ? data.title || slug : data.title,
        date: data.date || "",
        category: type === "blog" ? data.category || "General" : data.category,
        description:
          type === "blog"
            ? data.description || extractExcerpt(content)
            : data.description,
        featuredImage: data.featuredImage,
        content,
      };
    }

    return null;
  } catch (error) {
    console.error("Error loading post:", error);
    return null;
  }
}
