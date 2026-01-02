export const POST_TYPES = ["blog", "note"] as const;

export const CATEGORIES = ["technology", "random"] as const;

export const TAGS = [
  "React",
  "TypeScript",
  "TanStack",
  "Web Development",
  "CSS",
  "Tailwind",
  "Frontend",
  "Backend",
  "JavaScript",
  "Performance",
  "Testing",
  "DevOps",
] as const;

export type PostType = (typeof POST_TYPES)[number];
export type Category = (typeof CATEGORIES)[number];
export type Tag = (typeof TAGS)[number];
