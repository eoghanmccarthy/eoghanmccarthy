import { useCallback, useRef, useState } from "react";

import { useLocalStorage } from "./hooks/use-local-storage.tsx";

const LEARNED_KEY = "joyo-learned";
const SESSION_KEY = "joyo-last-session";

type LastSession = { date: string; count: number };

export function useJoyoProgress() {
  // Persisted array of kanji IDs the user has marked as learned
  const [learnedIds, setLearnedIds] = useLocalStorage<string[]>(LEARNED_KEY, []);

  // Persisted snapshot of the last session (date + number of toggles)
  const [lastSession, setLastSession] = useLocalStorage<LastSession | null>(SESSION_KEY, null);

  // Derived set for O(1) lookups when rendering the grid
  const learned = new Set(learnedIds);

  // Ref tracks the running toggle count without causing re-renders.
  // State mirror (`sessionCount`) is exposed for components that need to react to it.
  const sessionCountRef = useRef(0);
  const [sessionCount, setSessionCount] = useState(0);

  // Add or remove a kanji from the learned set,
  // bump the session counter, and persist the session snapshot.
  const toggle = useCallback(
    (id: string) => {
      const next = new Set(learned);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      setLearnedIds([...next]);
      sessionCountRef.current += 1;
      setSessionCount((c) => c + 1);
      const today = new Date().toISOString().slice(0, 10);
      setLastSession({ date: today, count: sessionCountRef.current });
    },
    [learned, setLearnedIds, setLastSession],
  );

  return { learned, toggle, sessionCount, lastSession };
}
