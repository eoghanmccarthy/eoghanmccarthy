import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { MainNav } from "@/components/main-nav.tsx";

export const Route = createFileRoute("/_projects-root")({
  component: RouteComponent,
    beforeLoad: () => {
      throw redirect({ to: '/' })
    },
});

function RouteComponent() {
  return (
    <>
      <header className="bg-stone-100 px-4 fixed top-0 left-0 z-50 w-full">
        <div className="h-[var(--site-header-height)] z-2 flex items-center justify-center">
          <MainNav className="gap-4 text-xl" />
        </div>
      </header>
      <Outlet />
    </>
  );
}
