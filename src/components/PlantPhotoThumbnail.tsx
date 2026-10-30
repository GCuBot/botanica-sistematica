"use client";

import { Image as ImageIcon } from "lucide-react";
import { getPhotoThumbnailUrl } from "@/lib/supabaseOperations";

interface PlantPhotoThumbnailProps {
  photoUrl: string | null;
  plantNumber: number;
}

export default function PlantPhotoThumbnail({
  photoUrl,
  plantNumber,
}: PlantPhotoThumbnailProps) {
  if (!photoUrl) {
    return (
      <span className="flex h-14 w-14 items-center justify-center rounded-md bg-gray-100 text-gray-400">
        <ImageIcon aria-hidden="true" size={20} />
      </span>
    );
  }

  return (
    <span className="block h-14 w-14 overflow-hidden rounded-md bg-gray-100">
      {/* Arbitrary public Supabase URLs cannot be declared statically for next/image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={getPhotoThumbnailUrl(photoUrl) || photoUrl}
        alt={`Miniatura de la planta N° ${plantNumber}`}
        loading="lazy"
        decoding="async"
        onError={(event) => {
          if (event.currentTarget.src !== photoUrl) {
            event.currentTarget.src = photoUrl;
          }
        }}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
