import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from "@/constants.ts";

export class ImageValidationError extends Error {
  constructor(
    message: string,
    public details?: string,
  ) {
    super(message);
    this.name = "ImageValidationError";
  }
}

export const validateImage = (file: File) => {
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    throw new ImageValidationError(
      "Invalid file type",
      "Only JPEG, PNG, GIF, and WebP images are allowed",
    );
  }
  if (file.size > MAX_FILE_SIZE) {
    throw new ImageValidationError(
      "File too large",
      "Maximum file size is 10MB",
    );
  }
};

export function generateShortId() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 6);
  return timestamp + random;
}

type FrontmatterData = {
  id: string;
  type: string;
  status: string;
  author: string;
  title?: string | null;
  category?: string | null;
  description?: string | null;
  featuredImage?: string | null;
  tags?: string[];
};

export const generateFrontmatter = (data: FrontmatterData): string => {
  const now = new Date().toISOString();

  const frontmatter = [
    "---",
    `id: ${data.id}`,
    `createdAt: ${now}`,
    `updatedAt: ${now}`,
    `type: ${data.type}`,
    `status: ${data.status}`,
    `author: ${data.author}`,
    data.title ? `title: ${data.title}` : null,
    data.category ? `category: ${data.category}` : null,
    data.description ? `description: ${data.description}` : null,
    data.featuredImage ? `featuredImage: ${data.featuredImage}` : null,
    data.tags && data.tags.length > 0
      ? `tags: [${data.tags.join(", ")}]`
      : null,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  return frontmatter;
};

export const updatePostStatus = (
  frontmatter: string,
  status: string,
  now: string,
) => {
  // Update status and updated date in frontmatter
  const updatedFrontmatter = frontmatter
    .split("\n")
    .map((line) => {
      if (line.startsWith("status:")) {
        return `status: ${status}`;
      }
      if (line.startsWith("updatedAt:")) {
        return `updatedAt: ${now}`;
      }
      return line;
    })
    .join("\n");

  return updatedFrontmatter;
};
