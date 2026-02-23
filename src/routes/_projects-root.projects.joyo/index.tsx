import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

import NotesSideNav from "@/components/notes-side-nav";
import { postsQueryOptions } from "@/queries/posts.ts";

import { CharCard } from "./char-card-02.tsx";
// https://gist.github.com/KEINOS/fb660943484008b7f5297bb627e0e1b1
import joyoData from "./joyo_2010.json";
import { CharacterData } from "./types.ts";
import { useJoyoProgress } from "./use-joyo-progress.ts";

const searchSchema = z.object({
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  strokes: z.coerce.number().optional(),
  grade: z.string().optional(),
  q: z.string().optional(),
  status: z.enum(["all", "learned", "unlearned"]).optional().default("all"),
});

function getStrokes(kanji: CharacterData): number | null {
  if (!kanji.raw_info) return null;
  const parts = kanji.raw_info.split("\t");
  const stroke = parseInt(parts[2], 10);
  return isNaN(stroke) ? null : stroke;
}

function getGrade(kanji: CharacterData): string | null {
  if (!kanji.raw_info) return null;
  const parts = kanji.raw_info.split("\t");
  return parts[3] || null;
}

export const Route = createFileRoute("/_projects-root/projects/joyo/")({
  validateSearch: zodValidator(searchSchema),
  loaderDeps: ({ search: { category, tags } }) => ({ category, tags }),
  loader: async ({ context, deps: { category, tags } }) => {
    await context.queryClient.ensureQueryData(postsQueryOptions({ category, tags }));
  },
  component: RouteComponent,
});

function formatSessionDate(dateStr: string): string {
  const [, m, d] = dateStr.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[parseInt(m, 10) - 1]} ${parseInt(d, 10)}`;
}

const totalKanji = Object.keys(joyoData).length;

function RouteComponent() {
  const navigate = useNavigate();
  const { category, tags, strokes, grade, q, status } = Route.useSearch();
  const { learned, toggle, lastSession } = useJoyoProgress();

  const filteredData = Object.entries(joyoData).filter(([id, kanji]) => {
    const k = kanji as CharacterData;
    if (strokes !== undefined && getStrokes(k) !== strokes) return false;
    if (grade !== undefined && getGrade(k) !== grade) return false;
    if (q) {
      const term = q.toLowerCase();
      const readings = [...(k.yomi?.on_yomi || []), ...(k.yomi?.kun_yomi || [])];
      const match = k.joyo_kanji.includes(term) || readings.some((r) => r.includes(term));
      if (!match) return false;
    }
    if (status === "learned" && !learned.has(id)) return false;
    if (status === "unlearned" && learned.has(id)) return false;
    return true;
  });

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
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search kanji or reading"
                value={q ?? ""}
                onChange={(e) =>
                  navigate({
                    to: ".",
                    search: (prev) => ({
                      ...prev,
                      q: e.target.value || undefined,
                    }),
                  })
                }
                className="border border-neutral-200 px-2 py-1 text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="strokes" className="text-sm text-neutral-500">
                Strokes
              </label>
              <input
                id="strokes"
                type="number"
                min={1}
                max={30}
                value={strokes ?? ""}
                onChange={(e) =>
                  navigate({
                    to: ".",
                    search: (prev) => ({
                      ...prev,
                      strokes: e.target.value ? Number(e.target.value) : undefined,
                    }),
                  })
                }
                className="w-16 border border-neutral-200 px-2 py-1 text-sm"
              />
              {strokes !== undefined && (
                <button
                  type="button"
                  onClick={() =>
                    navigate({
                      to: ".",
                      search: (prev) => ({ ...prev, strokes: undefined }),
                    })
                  }
                  className="text-sm text-neutral-400 hover:text-neutral-600"
                >
                  ×
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="grade" className="text-sm text-neutral-500">
                Grade
              </label>
              <select
                id="grade"
                value={grade ?? ""}
                onChange={(e) =>
                  navigate({
                    to: ".",
                    search: (prev) => ({
                      ...prev,
                      grade: e.target.value || undefined,
                    }),
                  })
                }
                className="border border-neutral-200 px-2 py-1 text-sm"
              >
                <option value="">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="S">S</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="status" className="text-sm text-neutral-500">
                Status
              </label>
              <select
                id="status"
                value={status ?? "all"}
                onChange={(e) =>
                  navigate({
                    to: ".",
                    search: (prev) => ({
                      ...prev,
                      status:
                        e.target.value === "all"
                          ? undefined
                          : (e.target.value as "learned" | "unlearned"),
                    }),
                  })
                }
                className="border border-neutral-200 px-2 py-1 text-sm"
              >
                <option value="all">All</option>
                <option value="learned">Learned</option>
                <option value="unlearned">Unlearned</option>
              </select>
            </div>
            {(strokes !== undefined || grade !== undefined || q) && (
              <span className="text-sm text-neutral-400">{filteredData.length} kanji</span>
            )}
          </div>
          <div className="mb-4 flex items-center gap-4 text-sm text-neutral-500">
            <span>
              {learned.size} / {totalKanji} learned
            </span>
            {lastSession && (
              <span>
                Last session: {lastSession.count} kanji · {formatSessionDate(lastSession.date)}
              </span>
            )}
          </div>
          <div
            className="font-jp grid gap-4 border-t border-l border-dashed border-neutral-200"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            }}
          >
            {filteredData.map(([id, kanji]) => {
              return (
                <CharCard
                  key={id}
                  id={id}
                  kanji={kanji as CharacterData}
                  learned={learned.has(id)}
                  onToggle={() => toggle(id)}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
