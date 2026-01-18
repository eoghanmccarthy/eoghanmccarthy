import {createFileRoute, Link} from "@tanstack/react-router";

import { Logo } from "@/components/logo.tsx";

export const Route = createFileRoute("/")({ component: RouteComponent });

function RouteComponent() {
  return (
    <div className="h-screen w-screen grid grid-cols-2">
      <div className="h-full w-full">
        <img
          src="/src/assets/IMG_4238 (1).JPG"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <nav className="flex flex-col gap-4 -skew-x-16">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>
          <Link to="/notes" className="hover:text-cyan-400">
            Notes
          </Link>
        </nav>
      </div>
    </div>
  );
}
