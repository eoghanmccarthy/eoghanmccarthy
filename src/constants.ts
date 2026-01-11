export const POST_TYPES = ["blog", "note"] as const;

export const CATEGORIES = ["technology", "random"] as const;

export const AUTHORS = ["eoghan"] as const;

export const POST_STATUS = ["draft", "published"] as const;

export const TAGS = ["React", "TypeScript", "Web Development"] as const;

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
];

export type PostType = (typeof POST_TYPES)[number];
export type Category = (typeof CATEGORIES)[number];
export type Author = (typeof AUTHORS)[number];
export type PostStatus = (typeof POST_STATUS)[number];
export type Tag = (typeof TAGS)[number];
