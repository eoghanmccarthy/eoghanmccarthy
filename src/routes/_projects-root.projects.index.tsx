import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

import { postsQueryOptions } from "@/queries/posts.ts";

import NotesSideNav from "@/components/notes-side-nav";

const searchSchema = z.object({
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const Route = createFileRoute("/_projects-root/projects/")({
  validateSearch: zodValidator(searchSchema),
  loaderDeps: ({ search: { category, tags } }) => ({ category, tags }),
  loader: async ({ context, deps: { category, tags } }) => {
    await context.queryClient.ensureQueryData(postsQueryOptions({ category, tags }));
  },
  component: RouteComponent,
});

type Project = {
  id: string;
};

const projects: Project[] = [{ id: "project-1" }, { id: "project-2" }, { id: "project-3" }];

function RouteComponent() {
  const navigate = useNavigate();
  const { category, tags } = Route.useSearch();
  const { data: posts } = useSuspenseQuery(postsQueryOptions({ category, tags }));

  return (
    <div className="page-container">
      <h1 className="page-heading">Projects</h1>

      <div className="content-grid">
        <aside>
          <div className="top-[var(--site-sticky-top)] md:sticky">
            <NotesSideNav category={category} tags={tags} />
          </div>
        </aside>

        {/* Main Content */}
        <main>
          <div className="space-y-12">
            {projects.length === 0 ? (
              <p className="text-gray-500">No projects found.</p>
            ) : (
              projects.map((post) => (
                <article
                  key={post.id}
                  className="space-y-2 pb-12 border-b border-gray-200 last:border-0"
                >
                  {post.id}
                </article>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
