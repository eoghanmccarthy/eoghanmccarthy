import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { zodValidator } from "@tanstack/zod-adapter";
import Markdown from "react-markdown";
import { z } from "zod";

import { CATEGORIES, TAGS } from "@/constants";

import { formatDate } from "@/utils/date.ts";

import { postsQueryOptions } from "@/queries/posts.ts";

import PostTypeBadge from "@/components/post-type-badge";
import FeaturedImage from "@/components/featured-image";

const notesSearchSchema = z.object({
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const Route = createFileRoute("/_content-root/notes/")({
  validateSearch: zodValidator(notesSearchSchema),
  loaderDeps: ({ search: { category, tags } }) => ({ category, tags }),
  loader: async ({ context, deps: { category, tags } }) => {
    await context.queryClient.ensureQueryData(
      postsQueryOptions({ category, tags }),
    );
  },
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { category, tags } = Route.useSearch();
  const { data: posts } = useSuspenseQuery(
    postsQueryOptions({ category, tags }),
  );

  return (
    <div className="page-container">
      <h1 className="text-6xl font-semibold mb-6 md:mb-16">Notes</h1>

      <div className="content-grid">
        {/* Sidebar */}
        <aside className="col-span-full lg:col-span-6">
          <div className="top-[var(--site-sticky-top)] md:sticky">
            <nav className="space-y-1 mb-6 text-base font-normal">
              {["all posts", ...CATEGORIES].map((c) => (
                <Link
                  to="."
                  key={c}
                  className={`block capitalize ${category === c || (category === undefined && c === "all posts") ? "text-gray-900" : "text-gray-600"} hover:text-gray-900`}
                  search={(prev) => ({
                    ...prev,
                    category: c === "all posts" ? undefined : c,
                  })}
                >
                  {c}
                </Link>
              ))}
              {[...TAGS].map((t) => (
                <Link
                  to="."
                  key={t}
                  className={`block capitalize ${tags && tags.includes(t) ? "text-gray-900" : "text-gray-600"} hover:text-gray-900`}
                  search={(prev) => {
                    const currentTags = prev.tags || [];
                    const isSelected = currentTags.includes(t);
                    const newTags = isSelected
                      ? currentTags.filter((tag) => tag !== t)
                      : [...currentTags, t];

                    return {
                      ...prev,
                      tags: newTags.length > 0 ? newTags : undefined,
                    };
                  }}
                >
                  {t}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-full lg:col-span-12">
          <div className="space-y-12">
            {posts.length === 0 ? (
              <p className="text-gray-500">No posts found.</p>
            ) : (
              posts.map((post) => (
                <article
                  key={post.id}
                  className="space-y-2 pb-12 border-b border-gray-200 last:border-0"
                >
                  <PostTypeBadge type={post.type} />
                  {post.type === "note" ? (
                    <>
                      <div
                        className="block group cursor-pointer"
                        onClick={(e) => {
                          // Allow links inside markdown to work without navigating to post
                          if ((e.target as HTMLElement).closest("a")) {
                            return;
                          }

                          navigate({
                            to: "/notes/$id",
                            params: { id: post.id },
                          });
                        }}
                      >
                        <div className="prose group-hover:text-gray-600 transition-colors">
                          <Markdown>{post.content}</Markdown>
                        </div>
                      </div>
                      {post.featuredImage && (
                        <FeaturedImage
                          src={post.featuredImage}
                          alt={post.title || "Post image"}
                          variant="detail"
                        />
                      )}
                      <p className="text-sm text-gray-500">
                        {formatDate(post.createdAt)}
                      </p>
                    </>
                  ) : post.type === "blog" ? (
                    <>
                      {post.featuredImage && (
                        <FeaturedImage
                          src={post.featuredImage}
                          alt={post.title || "Post image"}
                          variant="detail"
                        />
                      )}
                      <Link
                        to="/notes/$id"
                        params={{ id: post.id }}
                        className="block group"
                      >
                        <h2 className="text-xl font-normal text-gray-900 group-hover:text-gray-600 transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {post.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatDate(post.createdAt)}
                      </p>
                    </>
                  ) : null}
                </article>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
