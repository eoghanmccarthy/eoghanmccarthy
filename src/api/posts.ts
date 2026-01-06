import { queryOptions } from "@tanstack/react-query";
import { notFound } from "@tanstack/react-router";

import { loadPosts, loadPost, type Post } from "@/utils/posts";
import { type Tag } from "@/constants";

export type { Post };

export type PostFilters = {
  category?: string;
  tags?: string[];
};

// Fetch all posts from markdown files with optional filtering
export const fetchPosts = async (filters?: PostFilters) => {
  const allPosts = await loadPosts();

  // Filter to only published posts
  const publishedPosts = allPosts.filter((post) => post.status === "published");

  // If no filters, return published posts
  if (!filters?.category && (!filters?.tags || filters.tags.length === 0)) {
    return publishedPosts;
  }

  // Step 1: Filter by category
  let filteredPosts = filters.category
    ? publishedPosts.filter((post) => post.category === filters.category)
    : publishedPosts;

  // Step 2: Filter by tags (if any selected)
  if (filters.tags && filters.tags.length > 0) {
    filteredPosts = filteredPosts.filter((post) =>
      filters.tags!.some((tag) => post.tags.includes(tag as Tag)),
    );
  }

  return filteredPosts;
};

export const postsQueryOptions = (filters?: PostFilters) =>
  queryOptions({
    queryKey: ["posts", filters],
    queryFn: () => fetchPosts(filters),
  });

// Fetch single post by id from markdown files
export const fetchPost = async (id: string) => {
  const post = await loadPost(id);

  if (!post) {
    throw notFound();
  }

  return post;
};

export const postQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });
