import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_content-root/now/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="page-container">
      <h1 className="page-heading">Now</h1>

      <div className="content-grid">
        {/* Sidebar */}
        <aside></aside>

        {/* Main Content */}
        <main>
          <div className="prose">
            <p>
              Currently building tooling for machine learning teams and engineers. Exploring ways to
              use AI in both my day job and side projects, though I'm still figuring out practical
              applications beyond personal tinkering.
            </p>
            <p>Always on the lookout for interesting side projects.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
