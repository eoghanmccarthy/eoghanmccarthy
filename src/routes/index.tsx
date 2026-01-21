import { createFileRoute } from "@tanstack/react-router";

// import { Logo } from "@/components/logo.tsx";
import hero from "@/assets/IMG_4238 (1).JPG";

import { MainNav } from "@/components/main-nav.tsx";

export const Route = createFileRoute("/")({ component: RouteComponent });

function RouteComponent() {
  return (
    <div className="h-screen w-screen grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <div className="w-full min-h-0">
        <img src={hero} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full min-h-0 flex items-center justify-center">
        <MainNav className="flex-col" />
      </div>
    </div>
  );
}
