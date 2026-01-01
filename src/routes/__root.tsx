import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";

import Header from "../components/header";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
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
      <head>
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
