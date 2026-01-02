import { createFileRoute, Link } from "@tanstack/react-router";
import Markdown from "react-markdown";

import { loadPosts } from "@/utils/posts.ts";
import { formatDate } from "@/utils/date.ts";

import PostTypeBadge from "@/components/post-type-badge";
import FeaturedImage from "@/components/featured-image";
import Tags from "@/components/tags";

export const Route = createFileRoute("/notes/")({
  loader: async () => loadPosts(),
  component: Component,
});

function Component() {
  const posts = Route.useLoaderData();

  return (
    <div className="page-container">
      <h1 className="text-6xl font-normal mb-6 md:mb-16 -skew-x-16">Notes</h1>

      <div className="content-grid">
        {/* Sidebar */}
        <aside className="col-span-full lg:col-span-6">
          <div className="top-[var(--site-sticky-top)] md:sticky">
          <nav className="space-y-1 mb-6 text-base font-normal text-gray-900">
            <div>All Posts</div>
            <div>Technology</div>
            <div>Random</div>
          </nav></div>
        </aside>

        {/* Main Content */}
        <main className="col-span-full lg:col-span-12">
          <div className="space-y-12">
            {posts.length === 0 ? (
              <p className="text-gray-500">No posts found.</p>
            ) : (
              posts.map((post) => (
                <article
                  key={post.slug}
                  className="space-y-2 pb-12 border-b border-gray-200 last:border-0"
                >
                  <PostTypeBadge type={post.type} />
                  {post.type === "note" ? (
                    <>
                      <Link to={`/notes/${post.slug}`} className="block group">
                        <div className="prose group-hover:text-gray-600 transition-colors">
                          <Markdown>{post.content}</Markdown>
                        </div>
                      </Link>
                      {post.featuredImage && (
                        <FeaturedImage
                          src={post.featuredImage}
                          alt={post.title || "Post image"}
                          variant="detail"
                        />
                      )}
                      <p className="text-sm text-gray-500">
                        {formatDate(post.date)}
                      </p>
                    </>
                  ) : (
                    <>
                      {post.featuredImage && (
                        <FeaturedImage
                          src={post.featuredImage}
                          alt={post.title || "Post image"}
                          variant="detail"
                        />
                      )}
                      <Link to={`/notes/${post.slug}`} className="block group">
                        <h2 className="text-xl font-normal text-gray-900 group-hover:text-gray-600 transition-colors">
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
