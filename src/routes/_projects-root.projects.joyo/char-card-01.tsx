import { useState, useEffect } from "react";

import { CharacterData } from "./types.ts";

export function CharCard({ id, kanji }: { id: string; kanji: CharacterData }) {
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
