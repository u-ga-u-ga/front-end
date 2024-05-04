import { useState, useSyncExternalStore } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T | null, typeof localStorageStore.setLocalStorageState] {
  const [initialState] = useState<T | undefined>(initialValue);
  return [
    useSyncExternalStore(
      localStorageStore.subscribe,
      localStorageStore.getSnapshot(key)
    ) ||
      initialState ||
      null,
    localStorageStore.setLocalStorageState,
  ];
}

const localStorageStore = {
  getSnapshot(key: string) {
    return () => {
      try {
        return JSON.parse(localStorage.getItem(key) ?? "null");
      } catch {
        return null;
      }
    };
  },
  subscribe(listener: () => void) {
    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("storage", listener);
    };
  },
  setLocalStorageState<T>(key: string, newValue?: T) {
    if (typeof newValue === "undefined" || newValue === null) {
      window.localStorage.removeItem(key);
      window.dispatchEvent(new StorageEvent("storage", { key }));
    }
    const parsedNewValue = JSON.stringify(newValue);
    window.localStorage.setItem(key, parsedNewValue);
    // On localStoage.setItem, the storage event is only triggered on other tabs and windows.
    // So we manually dispatch a storage event to trigger the subscribe function on the current window as well.
    window.dispatchEvent(
      new StorageEvent("storage", { key, newValue: parsedNewValue })
    );
  },
};
