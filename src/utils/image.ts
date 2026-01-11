import Pica from "pica";

export type CompressOptions = {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
};

export const compressImage = async (
  file: File,
  options: CompressOptions = {},
): Promise<File> => {
  const { maxWidth = 1920, maxHeight = 1080, quality = 0.9 } = options;

  // Create image element
  const img = new Image();
  const imageUrl = URL.createObjectURL(file);

  // Wait for image to load
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = imageUrl;
  });

  // Calculate new dimensions while maintaining aspect ratio
  let { width, height } = img;
  if (width > maxWidth || height > maxHeight) {
    const aspectRatio = width / height;
    if (width > height) {
      width = maxWidth;
      height = Math.round(width / aspectRatio);
    } else {
      height = maxHeight;
      width = Math.round(height * aspectRatio);
    }
  }

  // Create canvas elements
  const sourceCanvas = document.createElement("canvas");
  const targetCanvas = document.createElement("canvas");

  sourceCanvas.width = img.width;
  sourceCanvas.height = img.height;
  targetCanvas.width = width;
  targetCanvas.height = height;

  // Draw source image
  const ctx = sourceCanvas.getContext("2d");
  if (!ctx) {
    URL.revokeObjectURL(imageUrl);
    throw new Error("Failed to get canvas context");
  }
  ctx.drawImage(img, 0, 0);

  // Use pica to resize with high quality
  const pica = Pica();
  await pica.resize(sourceCanvas, targetCanvas, {
    quality: 3, // Lanczos3 filter (highest quality)
    alpha: true,
  });

  // Convert to blob
  const blob = await pica.toBlob(targetCanvas, file.type, quality);

  // Clean up
  URL.revokeObjectURL(imageUrl);

  // Create new File from blob
  return new File([blob], file.name, {
    type: file.type,
    lastModified: Date.now(),
  });
};