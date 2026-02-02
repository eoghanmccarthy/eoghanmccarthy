import { z } from "zod";

import { AUTHORS, CATEGORIES, POST_STATUS, POST_TYPES, TAGS } from "@/constants.ts";

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

export { PostSchema };
export type Post = z.infer<typeof PostSchema>;
