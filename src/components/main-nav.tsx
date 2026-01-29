import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils.ts";

export function MainNav({ className }: { className?: string }) {
  return (
    <nav className={cn("flex text-3xl gap-1 heading-text", className)}>
      <Link to="/" className="hover:text-gray-400">
        ..
      </Link>
      <Link to="/notes" className="hover:text-gray-400">
        Notes
      </Link>
      <Link to="/now" className="hover:text-gray-400">
        Now
      </Link>
    </nav>
  );
}
