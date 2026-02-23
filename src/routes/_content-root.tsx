import { createFileRoute, Outlet } from "@tanstack/react-router";

import { MainNav } from "@/components/main-nav.tsx";

export const Route = createFileRoute("/_content-root")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-stone-100 px-4">
        <div className="z-2 flex h-[var(--site-header-height)] items-center justify-center">
          <MainNav className="gap-4 text-xl" />
        </div>
      </header>
      <Outlet />
    </>
  );
}
