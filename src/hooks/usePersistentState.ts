"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useSyncExternalStore,
} from "react";

const LOCAL_STORAGE_EVENT = "botanica:local-storage";
const fallbackValues = new Map<string, string>();

export function usePersistentState<T extends string>(
  storageKey: string,
  defaultValue: T,
  allowedValues: readonly T[]
): [T, Dispatch<SetStateAction<T>>] {
  const getSnapshot = useCallback(() => {
    let storedValue = fallbackValues.get(storageKey) ?? null;
    try {
      storedValue = window.localStorage.getItem(storageKey) ?? storedValue;
    } catch {
      // Fall back to memory when browser storage is unavailable.
    }
    return storedValue && allowedValues.includes(storedValue as T)
      ? (storedValue as T)
      : defaultValue;
  }, [allowedValues, defaultValue, storageKey]);

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const handleStorage = (event: StorageEvent) => {
        if (event.key === storageKey) onStoreChange();
      };
      const handleLocalStorage = (event: Event) => {
        if ((event as CustomEvent<string>).detail === storageKey) onStoreChange();
      };

      window.addEventListener("storage", handleStorage);
      window.addEventListener(LOCAL_STORAGE_EVENT, handleLocalStorage);
      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(LOCAL_STORAGE_EVENT, handleLocalStorage);
      };
    },
    [storageKey]
  );

  const value = useSyncExternalStore(subscribe, getSnapshot, () => defaultValue);

  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (nextValue) => {
      const resolvedValue =
        typeof nextValue === "function" ? nextValue(getSnapshot()) : nextValue;
      fallbackValues.set(storageKey, resolvedValue);
      try {
        window.localStorage.setItem(storageKey, resolvedValue);
      } catch {
        // The in-memory fallback still preserves state while this tab is open.
      }
      window.dispatchEvent(
        new CustomEvent<string>(LOCAL_STORAGE_EVENT, { detail: storageKey })
      );
    },
    [getSnapshot, storageKey]
  );

  return [value, setValue];
}
