import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import { loadPost } from "@/utils/posts.ts";
import { formatDate } from "@/utils/date.ts";
import PostTypeBadge from "@/components/post-type-badge";
import FeaturedImage from "@/components/featured-image";

export const Route = createFileRoute("/notes/$slug")({
  loader: async ({ params: { slug } }) => loadPost(slug),
  component: PostView,
  notFoundComponent: () => {
    return <p>Post not found!</p>;
  },
});

function PostView() {
  const post = Route.useLoaderData();

  if (!post) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="content-grid">
        {/* Sidebar */}
        <aside className="col-span-full lg:col-span-6">
          <nav className="space-y-2">
            <div className="text-base font-medium text-gray-900">All Posts</div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-span-full lg:col-span-12">
          <div className="mb-4">
            <PostTypeBadge type={post.type} />
          </div>
          {post.type === "blog" && post.featuredImage && (
            <FeaturedImage
              src={post.featuredImage}
              alt={post.title || "Post image"}
              variant="detail"
            />
          )}
          {post.type === "blog" && post.title && (
            <h1 className="text-4xl font-normal mb-2 text-balance">
              {post.title}
            </h1>
          )}
          <p className="text-gray-500 mb-8 font-normal">
            {formatDate(post.date)}
          </p>
          <div className="prose">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          {post.type === "note" && post.featuredImage && (
            <FeaturedImage
              src={post.featuredImage}
              alt={post.title || "Post image"}
              variant="detail"
            />
          )}
        </main>
      </div>
    </div>
  );
}
