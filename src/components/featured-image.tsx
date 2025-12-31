interface FeaturedImageProps {
  src: string;
  alt: string;
  variant?: 'list' | 'detail';
}

export default function FeaturedImage({ src, alt, variant = 'detail' }: FeaturedImageProps) {
  const className = variant === 'list'
    ? 'w-full h-48 object-cover mb-2 rounded-md'
    : 'w-full h-auto mb-8 rounded-md';

  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
}
