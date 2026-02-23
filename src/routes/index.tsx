import { createFileRoute } from "@tanstack/react-router";

// @ts-expect-error -- image file
import hero from "@/assets/IMG_4238 (1).JPG";
import { Logo } from "@/components/logo.tsx";
import { MainNav } from "@/components/main-nav.tsx";

export const Route = createFileRoute("/")({ component: RouteComponent });

function RouteComponent() {
  return (
    <div className="grid h-screen w-screen grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <div className="relative min-h-0 w-full">
        <img src={hero} alt="" className="h-full w-full object-cover" />
        {/*<div className="absolute top-0 left-0 w-full h-full grid place-items-center">*/}
        {/*  <Logo className="max-w-32 h-auto [&_path]:fill-transparent! [&_path]:stroke-white! [&_path]:stroke-3!" />*/}
        {/*</div>*/}
      </div>
      <div className="flex min-h-0 w-full items-center justify-center">
        <MainNav className="flex-col" />
      </div>
    </div>
  );
}
