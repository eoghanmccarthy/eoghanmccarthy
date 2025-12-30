import { createFileRoute } from '@tanstack/react-router'
import ReactMarkdown from 'react-markdown'

import { loadPost } from '@/utils/posts.ts'
import { formatDate } from "@/utils/date.ts";

export const Route = createFileRoute('/notes/$slug')({
  loader: async ({ params: { slug } }) => loadPost(slug),
  component: PostView })

function PostView() {
  const post = Route.useLoaderData()

  if (!post) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-normal mb-2 text-balance">{post.title}</h1>
      <p className="text-gray-500 mb-8 font-normal">{formatDate(post.date)}</p>
      <div className="prose prose-lg">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  )
}
