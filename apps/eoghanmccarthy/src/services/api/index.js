import { useQuery } from 'react-query'

import { items as posts } from 'posts'

const postsKeys = {
  all: ['posts'],
  lists: () => [...postsKeys.all, 'list'],
  list: (filters) => [...postsKeys.lists(), { filters }],
  details: () => [...postsKeys.all, 'detail'],
  detail: (id) => [...postsKeys.details(), id],
}

export const useGetPosts = (options = {}) => {
  return useQuery(
    postsKeys.list(),
    async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(posts)
        }, 0)
      })
    },
    {
      ...options,
    }
  )
}

export const useGetPost = (params, options = {}) => {
  const { postId } = params
  return useQuery(
    postsKeys.detail(postId),
    async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = posts.find((item) => item.id === postId)
          resolve(data)
        }, 0)
      })
    },
    {
      cacheTime: 0,
      ...options,
    }
  )
}
