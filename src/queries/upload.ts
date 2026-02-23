import { useMutation } from "@tanstack/react-query";

import type { PostType, PostStatus, Category } from "@/constants";

import { compressImage } from "@/utils/image";

// Create post with optional image
export type CreatePostVariables = {
  apiKey: string;
  content: string;
  tags?: string;
  featuredImage?: File;
  title?: string;
  type?: PostType;
  status?: PostStatus;
  category?: Category;
  description?: string;
  message?: string;
  branch?: string;
};

export type CreatePostResponse = {
  success: boolean;
  id: string;
  path: string;
  url: string;
  imageUrl?: string | null;
};

export const useCreatePost = () => {
  return useMutation({
    mutationFn: async (input: CreatePostVariables) => {
      const { apiKey, featuredImage, ...postFields } = input;

      // Build FormData
      const formData = new FormData();

      // Add all text fields
      Object.entries(postFields).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      // Compress and add image if provided
      if (featuredImage) {
        const compressedImage = await compressImage(featuredImage, {
          maxWidth: 1920,
          maxHeight: 1080,
          quality: 0.9,
        });
        formData.append("featuredImage", compressedImage);
      }

      // Send request
      const response = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          "X-Custom-Auth-Key": apiKey,
        },
        body: formData,
      });

      if (!response.ok) {
        const error = (await response.json()) as { error?: string };
        throw new Error(error.error || "Failed to create post");
      }

      return response.json() as Promise<CreatePostResponse>;
    },
  });
};
