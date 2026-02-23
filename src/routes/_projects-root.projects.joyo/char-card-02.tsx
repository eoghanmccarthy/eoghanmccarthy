import { useState, useEffect } from "react";

import { CharacterData } from "./types.ts";

export function CharCard({
  id,
  kanji,
  learned,
  onToggle,
}: {
  id: string;
  kanji: CharacterData;
  learned: boolean;
  onToggle: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [visibleChars, setVisibleChars] = useState(0);

  const onReading = kanji.yomi?.on_yomi?.join("・") || "";
  const kunReading = kanji.yomi?.kun_yomi?.join("・") || "";
  const fullReading = [onReading, kunReading].filter(Boolean).join(" ");
  const totalChars = fullReading.length;

  const readingCount = (kanji.yomi?.on_yomi?.length || 0) + (kanji.yomi?.kun_yomi?.length || 0);
  const opacity = 0.03 + Math.min(readingCount, 8) * 0.02; // 0.03 to 0.19

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
      onClick={onToggle}
      className={`relative flex aspect-square cursor-pointer flex-col overflow-hidden`}
    >
      {learned && (
        <span className="absolute top-1.5 right-2 z-10 text-[10px] text-neutral-400">●</span>
      )}
      <span
        className={`block p-2 font-mono text-[10px] ${
          isHovered ? "text-neutral-500" : "text-neutral-400"
        }`}
      >
        U+{Number(id).toString(16).toUpperCase().padStart(4, "0")}
      </span>

      <div
        className={`group relative grid flex-1 place-items-center`}
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      >
        <div className="l-[10%] absolute top-0 h-full w-[80%] bg-[yellow] group-hover:bg-white/60"></div>
        <span
          className={`z-1 mr-1 text-5xl font-light tracking-tight`}
          style={{ fontSize: 180, marginTop: 16 }}
        >
          {kanji.joyo_kanji}
        </span>
      </div>

      <div className="absolute top-8 left-4 flex h-full w-full flex-col items-start gap-0.5">
        {onReading && (
          <span className="text-xl text-neutral-400">{onReading.slice(0, visibleChars)}</span>
        )}
        {kunReading && (
          <span className="text-xl text-neutral-500">
            {kunReading.slice(0, Math.max(0, visibleChars - onReading.length))}
          </span>
        )}
      </div>

      {/*<span*/}
      {/*  className={`block p-2 font-mono text-[10px] ${*/}
      {/*    isHovered ? "text-neutral-500" : "text-neutral-400"*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  U+{Number(id).toString(16).toUpperCase().padStart(4, "0")}*/}
      {/*</span>*/}
    </div>
  );
}
