import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="bg-stone-100 px-4 fixed top-0 left-0 z-50 w-full">
      <div className="h-[var(--site-header-height)] z-2 flex items-center justify-center">
        <nav className="flex gap-4 -skew-x-16">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>
          <Link to="/notes" className="hover:text-cyan-400">
            Notes
          </Link>
        </nav>
      </div>
    </header>
  );
}
