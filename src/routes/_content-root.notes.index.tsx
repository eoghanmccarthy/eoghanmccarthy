import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { zodValidator } from "@tanstack/zod-adapter";
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import { z } from "zod";

import { formatDate } from "@/utils/date.ts";

import { postsQueryOptions } from "@/queries/posts.ts";

import PostTypeBadge from "@/components/post-type-badge";
import FeaturedImage from "@/components/featured-image";
import NotesSideNav from "@/components/notes-side-nav";

const searchSchema = z.object({
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const Route = createFileRoute("/_content-root/notes/")({
  validateSearch: zodValidator(searchSchema),
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
      <h1 className="text-6xl heading-text mb-6 md:mb-16">Notes</h1>

      <div className="content-grid">
        <aside className="col-span-full lg:col-span-6">
          <div className="top-[var(--site-sticky-top)] md:sticky">
            <NotesSideNav category={category} tags={tags} />
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
                          <Markdown
                            // rehypePlugins={[
                            //   rehypeExternalLinks({ target: "_blank" }),
                            // ]}
                          >
                            {post.content}
                          </Markdown>
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
