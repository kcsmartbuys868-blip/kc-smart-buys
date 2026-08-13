"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const validImages = images.filter(
    (image) => typeof image === "string" && image.trim() !== ""
  );

  const [selectedImage, setSelectedImage] = useState(0);

  if (validImages.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
        No image available
      </div>
    );
  }

  const currentImage =
    validImages[selectedImage] ?? validImages[0];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={currentImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-4 sm:p-8"
        />
      </div>

      {/* Thumbnail Images */}
      {validImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {validImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 transition ${
                selectedImage === index
                  ? "ring-2 ring-blue-900 ring-offset-2"
                  : "ring-1 ring-gray-200 hover:ring-blue-300"
              }`}
              aria-label={`View image ${index + 1} of ${productName}`}
            >
              <Image
                src={image}
                alt={`${productName} image ${index + 1}`}
                fill
                sizes="80px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {validImages.length > 1 && (
        <p className="text-center text-xs font-semibold text-gray-500">
          Image {selectedImage + 1} of {validImages.length}
        </p>
      )}
    </div>
  );
}