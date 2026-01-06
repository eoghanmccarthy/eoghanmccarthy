import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <div className="h-screen grid grid-cols-2">
        {/* Left: Image */}
        <div className="relative h-full">
          <img
            src="/src/assets/IMG_3568.jpg"
            alt=""
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Right: Content */}
        <div className="relative h-full bg-white flex flex-col justify-between p-12 md:p-20">
          {/* Large Number */}
          <div className="flex-1 flex items-center">
            <h1 className="text-[25vw] md:text-[20vw] font-black leading-none tracking-tighter text-black">
              01
            </h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-6 border-t border-black pt-8">
            <Link
              to="/notes"
              className="block text-xl md:text-2xl font-normal tracking-tight hover:opacity-50 transition-opacity uppercase"
            >
              Notes
            </Link>
            <div className="text-xs uppercase tracking-widest text-gray-500">
              2026
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
