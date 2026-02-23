interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
