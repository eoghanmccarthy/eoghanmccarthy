import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils.ts";

export function MainNav({ className }: { className?: string }) {
  return (
    <nav className={cn("flex text-3xl gap-1 font-semibold", className)}>
      <Link to="/" className="hover:text-gray-400">
        Home
      </Link>
      <Link to="/notes" className="hover:text-gray-400">
        Notes
      </Link>
    </nav>
  );
}
