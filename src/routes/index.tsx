import { createFileRoute, Link } from "@tanstack/react-router";

import { Logo } from "@/components/logo.tsx";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div
      className="fixed inset-0 overflow-hidden bg-black bg-cover bg-center"
      // style={{ backgroundImage: "url(/src/assets/IMG_3568.jpg)" }}
    >
      <img
        src="/src/assets/IMG_4238 (1).JPG"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="h-screen grid grid-cols-1 py-16">
        {/* Left: Image */}
        {/*<div className="relative h-full">*/}
        {/*  <img*/}
        {/*    src="/src/assets/IMG_3568.jpg"*/}
        {/*    alt=""*/}
        {/*    className="w-full h-full object-cover opacity-90"*/}
        {/*  />*/}
        {/*</div>*/}
        <Logo className="w-full h-full max-w-full max-h-full" />
      </div>
    </div>
  );
}
