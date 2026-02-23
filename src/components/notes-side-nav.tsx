import { Link } from "@tanstack/react-router";

import { CATEGORIES, CATEGORY_DISPLAY_NAMES, TAGS, TAG_DISPLAY_NAMES } from "@/constants";

interface NotesSideNavProps {
  category?: string | null;
  tags?: string[];
}

export default function NotesSideNav({ category, tags }: NotesSideNavProps) {
  return (
    <nav className="mb-6 space-y-1 text-base font-normal">
      {/*{["all posts", ...CATEGORIES].map((c) => (*/}
      {/*  <Link*/}
      {/*    to="/notes"*/}
      {/*    key={c}*/}
      {/*    className={`block ${category === c || (category === undefined && c === "all posts") ? "text-gray-900" : "text-gray-600"} hover:text-gray-900`}*/}
      {/*    search={(prev) => ({*/}
      {/*      ...prev,*/}
      {/*      category: c === "all posts" ? undefined : c,*/}
      {/*    })}*/}
      {/*  >*/}
      {/*    {CATEGORY_DISPLAY_NAMES[c as keyof typeof CATEGORY_DISPLAY_NAMES] ??*/}
      {/*      c}*/}
      {/*  </Link>*/}
      {/*))}*/}
      {[...TAGS].map((t) => (
        <Link
          to="/notes"
          key={t}
          className={`block ${tags && tags.includes(t) ? "text-gray-900" : "text-gray-600"} hover:text-gray-900`}
          search={(prev) => {
            const currentTags = prev.tags || [];
            const isSelected = currentTags.includes(t);
            const newTags = isSelected
              ? currentTags.filter((tag) => tag !== t)
              : [...currentTags, t];

            return {
              ...prev,
              tags: newTags.length > 0 ? newTags : undefined,
            };
          }}
        >
          {TAG_DISPLAY_NAMES[t] ?? t}
        </Link>
      ))}
    </nav>
  );
}
