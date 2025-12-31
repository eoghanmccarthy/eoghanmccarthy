interface PostTypeBadgeProps {
  type: 'blog' | 'note';
}

export default function PostTypeBadge({ type }: PostTypeBadgeProps) {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
        type === 'note'
          ? 'bg-blue-100 text-blue-700'
          : 'bg-purple-100 text-purple-700'
      }`}
    >
      {type}
    </span>
  );
}