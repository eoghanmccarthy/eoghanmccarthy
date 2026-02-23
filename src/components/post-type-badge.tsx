import { type PostType } from "@/constants";

interface PostTypeBadgeProps {
  type: PostType;
}

export default function PostTypeBadge({ type }: PostTypeBadgeProps) {
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${
        type === "note" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
      }`}
    >
      {type}
    </span>
  );
}
