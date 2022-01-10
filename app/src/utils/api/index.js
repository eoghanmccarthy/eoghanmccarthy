import { useQuery } from "react-query";
import axios from "axios";

import { posts as postsData } from "src/data";

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
      const { data } = await axios.get(`/posts/`);
      return data;
    },
    {
      ...options,
    }
  );
};

async function getPost(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = postsData.find((item) => item.id === postId);
      resolve(data);
    }, 100);
  });
}

export const useGetPost = (params, options = {}) => {
  const { postId } = params;
  return useQuery(postsKeys.detail(postId), async () => await getPost(postId), {
    cacheTime: 0,
    ...options,
  });
};
