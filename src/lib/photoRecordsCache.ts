import { PhotoRecord } from "@/types";

const CACHE_PREFIX = "botanica:photo-records:v1:";
const CACHE_TTL_MS = 5 * 60 * 1000;

export interface CachedPhotoRecords {
  records: PhotoRecord[];
  total: number;
  isComplete: boolean;
}

interface StoredPhotoRecords extends CachedPhotoRecords {
  cachedAt: number;
}

function getCacheKey(userId: string) {
  return `${CACHE_PREFIX}${userId}`;
}

export function getCachedPhotoRecords(userId: string): CachedPhotoRecords | null {
  if (typeof window === "undefined") return null;

  const cacheKey = getCacheKey(userId);
  try {
    const rawValue = window.sessionStorage.getItem(cacheKey);
    if (!rawValue) return null;

    const cached = JSON.parse(rawValue) as StoredPhotoRecords;
    if (
      !Array.isArray(cached.records) ||
      typeof cached.total !== "number" ||
      typeof cached.cachedAt !== "number" ||
      Date.now() - cached.cachedAt > CACHE_TTL_MS
    ) {
      window.sessionStorage.removeItem(cacheKey);
      return null;
    }

    return {
      records: cached.records,
      total: cached.total,
      isComplete: cached.isComplete === true,
    };
  } catch {
    window.sessionStorage.removeItem(cacheKey);
    return null;
  }
}

export function setCachedPhotoRecords(
  userId: string,
  value: CachedPhotoRecords
): void {
  if (typeof window === "undefined") return;

  try {
    const cached: StoredPhotoRecords = {
      ...value,
      cachedAt: Date.now(),
    };
    window.sessionStorage.setItem(getCacheKey(userId), JSON.stringify(cached));
  } catch {
    // Storage can be unavailable or full; the live Supabase data still works.
  }
}

export function clearCachedPhotoRecords(userId: string): void {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(getCacheKey(userId));
}
