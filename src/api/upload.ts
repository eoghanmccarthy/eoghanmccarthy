import { useMutation } from "@tanstack/react-query";

import type { PostType, PostStatus, Category, Tag } from "@/constants";
import { compressImage } from "@/utils/image";

// Response type for image upload
export type ImageUploadResponse = {
  success: boolean;
  url: string;
  filename: string;
  size: number;
  type: string;
};

// Response type for post upload
export type PostUploadResponse = {
  success: boolean;
  path: string;
  url: string;
};

// Upload image to R2 storage
export const uploadImage = async (
  file: File,
  apiKey: string,
): Promise<ImageUploadResponse> => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch("/api/images/upload", {
    method: "POST",
    headers: {
      "X-Custom-Auth-Key": apiKey,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = (await response.json()) as { error?: string };
    throw new Error(error.error || "Failed to upload image");
  }

  return response.json();
};

// Upload post data to GitHub
export type PostData = {
  title?: string;
  content: string;
  type?: PostType;
  status?: PostStatus;
  author?: string;
  category?: Category | null;
  description?: string;
  featuredImage?: string | null;
  tags?: Tag[];
  message?: string;
  branch?: string;
};

export const uploadPost = async (
  data: PostData,
  apiKey: string,
): Promise<PostUploadResponse> => {
  const response = await fetch("/api/posts/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Custom-Auth-Key": apiKey,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = (await response.json()) as { error?: string };
    throw new Error(error.error || "Failed to upload post");
  }

  return response.json();
};

// Combined mutation for uploading image + post
export type UploadPostInput = {
  apiKey: string;
  content: string;
  tags?: string;
  featuredImage?: File;
  title?: string;
  type?: PostType;
  status?: PostStatus;
  category?: Category;
  description?: string;
};

export const useUploadPost = () => {
  return useMutation({
    mutationFn: async (input: UploadPostInput) => {
      const { apiKey, featuredImage, tags, ...postFields } = input;

      // Step 1: Compress and upload image if provided
      let imageUrl: string | null = null;
      if (featuredImage) {
        const compressedImage = await compressImage(featuredImage, {
          maxWidth: 1920,
          maxHeight: 1080,
          quality: 0.9,
        });
        const imageResponse = await uploadImage(compressedImage, apiKey);
        imageUrl = imageResponse.url;
      }

      // Step 2: Parse tags (backend will validate against allowed tags)
      const parsedTags = tags
        ? tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [];

      // Step 3: Upload post with image URL
      const postData: PostData = {
        ...postFields,
        featuredImage: imageUrl,
        tags: parsedTags as Tag[],
      };

      return uploadPost(postData, apiKey);
    },
  });
};

// Create post with optional image
export type CreatePostInput = {
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
    mutationFn: async (input: CreatePostInput) => {
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
