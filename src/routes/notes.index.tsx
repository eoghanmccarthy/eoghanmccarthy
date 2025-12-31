import { createFileRoute, Link } from "@tanstack/react-router";
import Markdown from "react-markdown";

import { loadPosts } from "@/utils/posts.ts";
import { formatDate } from "@/utils/date.ts";

import PostTypeBadge from "@/components/post-type-badge";
import FeaturedImage from "@/components/featured-image";

export const Route = createFileRoute("/notes/")({
  loader: async () => loadPosts(),
  component: Component,
});

function Component() {
  const posts = Route.useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-6xl font-normal mb-16 tracking-tight">Notes</h1>

      <div className="flex gap-16">
        {/* Sidebar */}
        <aside className="w-48 flex-shrink-0 max-xl:hidden">
          <nav className="space-y-2">
            <div className="text-base font-medium text-gray-900">All Posts</div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-3xl">
          <div className="space-y-12">
            {posts.length === 0 ? (
              <p className="text-gray-500">No posts found.</p>
            ) : (
              posts.map((post) => (
                <article key={post.slug} className="space-y-2">
                  <PostTypeBadge type={post.type} />
                  {post.featuredImage && (
                    <FeaturedImage
                      src={post.featuredImage}
                      alt={post.title || 'Post image'}
                      variant="detail"
                    />
                  )}
                  {post.type === 'note' ? (
                    <>
                      <Link to={`/notes/${post.slug}`} className="block group">
                        <div className="prose group-hover:text-gray-600 transition-colors">
                          <Markdown>{post.content}</Markdown>
                        </div>
                      </Link>
                      <p className="text-sm text-gray-500">
                        {formatDate(post.date)}
                      </p>
                    </>
                  ) : (
                    <>
                      <Link to={`/notes/${post.slug}`} className="block group">
                        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {post.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {post.category} · {formatDate(post.date)}
                      </p>
                    </>
                  )}
                </article>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
