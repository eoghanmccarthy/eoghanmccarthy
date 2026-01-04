import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

import Header from "../components/header";

import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "eoghanmccarthy",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
      ],
    }),
    shellComponent: RootDocument,
    notFoundComponent: () => {
      return <p>Not found!</p>;
    },
    ssr: true,
  },
);

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        </style>
        <HeadContent />
      </head>
      <body className="bg-stone-100 font-serif text-gray-700 pt-[var(--site-header-height)]">
        <Header />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
