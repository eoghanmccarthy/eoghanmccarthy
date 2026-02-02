import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useState, useEffect } from "react";

import { postsQueryOptions } from "@/queries/posts.ts";

import NotesSideNav from "@/components/notes-side-nav";

import joyoData from "./joyo_2010.json";

const searchSchema = z.object({
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const Route = createFileRoute("/_projects-root/projects/joyo/")({
  validateSearch: zodValidator(searchSchema),
  loaderDeps: ({ search: { category, tags } }) => ({ category, tags }),
  loader: async ({ context, deps: { category, tags } }) => {
    await context.queryClient.ensureQueryData(postsQueryOptions({ category, tags }));
  },
  component: RouteComponent,
});

type CharacterData = {
  joyo_kanji: string;
  yomi?: {
    on_yomi?: string[];
    kun_yomi?: string[];
  };
};

function KanjiCell({ id, kanji }: { id: string; kanji: CharacterData }) {
  const [isHovered, setIsHovered] = useState(false);
  const [visibleChars, setVisibleChars] = useState(0);

  const onReading = kanji.yomi?.on_yomi?.join("・") || "";
  const kunReading = kanji.yomi?.kun_yomi?.join("・") || "";
  const fullReading = [onReading, kunReading].filter(Boolean).join(" ");
  const totalChars = fullReading.length;

  useEffect(() => {
    if (!isHovered) {
      setVisibleChars(0);
      return;
    }

    if (visibleChars >= totalChars) return;

    const timeout = setTimeout(() => {
      setVisibleChars((prev) => prev + 1);
    }, 40);

    return () => clearTimeout(timeout);
  }, [isHovered, visibleChars, totalChars]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative aspect-square border-r border-dashed border-b border-neutral-200 cursor-pointer overflow-hidden ${
        isHovered ? "bg-neutral-900" : "bg-neutral-50"
      }`}
    >
      <span
        className={`absolute top-2 left-2 font-mono text-[10px] ${
          isHovered ? "text-neutral-500" : "text-neutral-400"
        }`}
      >
        U+{Number(id).toString(16).toUpperCase().padStart(4, "0")}
      </span>

      <span
        className={`absolute top-1/3 left-4 text-5xl font-light tracking-tight ${
          isHovered ? "text-neutral-50" : "text-neutral-900"
        }`}
      >
        {kanji.joyo_kanji}
      </span>

      <div className="absolute bottom-4 left-4 flex flex-col items-start gap-0.5">
        {onReading && (
          <span className="text-xs text-neutral-400">{onReading.slice(0, visibleChars)}</span>
        )}
        {kunReading && (
          <span className="text-xs text-neutral-500">
            {kunReading.slice(0, Math.max(0, visibleChars - onReading.length))}
          </span>
        )}
      </div>
    </div>
  );
}

function RouteComponent() {
  const navigate = useNavigate();
  const { category, tags } = Route.useSearch();

  return (
    <div className="page-container" style={{ maxWidth: "100%" }}>
      <h1 className="page-heading">Projects</h1>

      <div className="content-grid">
        <aside>
          <div className="top-[var(--site-sticky-top)] md:sticky">
            <NotesSideNav category={category} tags={tags} />
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ gridColumnEnd: "-1" }}>
          <div
            className="grid font-jp border-l border-dashed border-t border-neutral-200"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            }}
          >
            {Object.entries(joyoData).map(([id, kanji]: [string, CharacterData]) => {
              return <KanjiCell key={id} id={id} kanji={kanji} />;
              return (
                <div
                  key={id}
                  className="group relative grid place-items-center aspect-square border-r border-dashed border-b border-neutral-200 bg-neutral-50 hover:bg-neutral-900 cursor-pointer overflow-hidden"
                >
                  <span className="absolute top-2 left-2 font-mono text-[10px] text-neutral-400 group-hover:text-neutral-500 transition-colors duration-500">
                    U+{Number(id).toString(16).toUpperCase().padStart(4, "0")}
                  </span>

                  {/* Kanji - shifts up on hover */}
                  <span className="text-5xl font-light tracking-tight text-neutral-900 group-hover:text-neutral-50 transition-all duration-500 ease-out group-hover:-translate-y-4">
                    {kanji.joyo_kanji}
                  </span>

                  {/* Readings - fade in from below on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-0.5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    {kanji.yomi?.on_yomi && (
                      <span className="text-xs text-neutral-400">
                        {kanji.yomi.on_yomi.join("・")}
                      </span>
                    )}
                    {kanji.yomi?.kun_yomi && (
                      <span className="text-xs text-neutral-500">
                        {kanji.yomi.kun_yomi.join("・")}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
