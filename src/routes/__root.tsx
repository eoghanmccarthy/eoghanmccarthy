import type { QueryClient } from "@tanstack/react-query";

import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router";

import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
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
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head title="eoghan mccarthy">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
        <HeadContent />
      </head>
      <body className="bg-stone-100 font-serif text-gray-700 has-[>header]:pt-[var(--site-header-height)]">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
