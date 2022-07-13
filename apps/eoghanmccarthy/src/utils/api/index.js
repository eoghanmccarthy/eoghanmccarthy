import { useQuery } from "react-query";

import { items as posts } from "../../data/posts";
import { items as canvases } from "../../data/canvas";

const postsKeys = {
  all: ["posts"],
  lists: () => [...postsKeys.all, "list"],
  list: (filters) => [...postsKeys.lists(), { filters }],
  details: () => [...postsKeys.all, "detail"],
  detail: (id) => [...postsKeys.details(), id],
};

export const useGetPosts = (options = {}) => {
  return useQuery(
    postsKeys.list(),
    async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(posts);
        }, 100);
      });
    },
    {
      ...options,
    }
  );
};

export const useGetPost = (params, options = {}) => {
  const { postId } = params;
  return useQuery(
    postsKeys.detail(postId),
    async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = posts.find((item) => item.id === postId);
          resolve(data);
        }, 100);
      });
    },
    {
      cacheTime: 0,
      ...options,
    }
  );
};

const canvasKeys = {
  all: ["canvas"],
  lists: () => [...canvasKeys.all, "list"],
  list: (filters) => [...canvasKeys.lists(), { filters }],
  details: () => [...canvasKeys.all, "detail"],
  detail: (id) => [...canvasKeys.details(), id],
};

export const useGetCanvas = (params, options = {}) => {
  const { canvasId } = params;
  return useQuery(
    canvasKeys.detail(canvasId),
    async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = canvases.find((item) => item.id === canvasId);
          resolve(data);
        }, 100);
      });
    },
    {
      cacheTime: 0,
      ...options,
    }
  );
};
