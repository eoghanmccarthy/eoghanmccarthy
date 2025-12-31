import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-center">
      <nav className="flex gap-4 -skew-x-12">
        <Link to="/" className="hover:text-cyan-400">
          Home
        </Link>
        <Link to="/notes" className="hover:text-cyan-400">
          Notes
        </Link>
      </nav>
    </header>
  );
}
