import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";

import { formatDate } from "@/utils/date.ts";
import { CATEGORIES, CATEGORY_DISPLAY_NAMES, TAG_DISPLAY_NAMES } from "@/constants";

import { postQueryOptions } from "@/queries/posts";

import PostTypeBadge from "@/components/post-type-badge";
import FeaturedImage from "@/components/featured-image";
import NotesSideNav from "@/components/notes-side-nav";

export const Route = createFileRoute("/_content-root/notes/$id")({
  loader: async ({ context: { queryClient }, params: { id } }) => {
    await queryClient.ensureQueryData(postQueryOptions(id));
  },
  component: RouteComponent,
  notFoundComponent: () => {
    return <p>Post not found!</p>;
  },
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { data: post } = useSuspenseQuery(postQueryOptions(id));

  return (
    <div className="page-container">
      <div className="content-grid">
        {/* Sidebar */}
        <aside>
          <div className="top-[var(--site-sticky-top)] md:sticky">
            <NotesSideNav category={post.category} tags={post.tags} />
          </div>
        </aside>

        {/* Main Content */}
        <main>
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
            <h1 className="text-4xl font-normal mb-2 text-balance">{post.title}</h1>
          )}
          <p className="text-gray-500 mb-8 font-normal">{formatDate(post.createdAt)}</p>
          <div className="prose">
            <ReactMarkdown
            // rehypePlugins={[rehypeExternalLinks({ target: "_blank" })]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          {post.type === "note" && post.featuredImage && (
            <FeaturedImage
              src={post.featuredImage}
              alt={post.title || "Post image"}
              variant="detail"
            />
          )}
          {post.tags.length > 0 && (
            <div className="mt-8 text-sm text-gray-600">
              {post.tags.map((tag, index) => (
                <span key={tag}>
                  {index > 0 && <span className="mx-2">•</span>}
                  <Link to="/notes" search={{ tags: [tag] }} className="hover:text-gray-900">
                    {TAG_DISPLAY_NAMES[tag as keyof typeof TAG_DISPLAY_NAMES] ?? tag}
                  </Link>
                </span>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
