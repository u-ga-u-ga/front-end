import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

declare global {
  interface WindowEventMap {
    "local-storage": CustomEvent;
  }
}

export default function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [T | null, (item: T | ((input?: T) => T)) => void, () => void] {
  const [currentStore, setStore] = useState<T | null>(initialValue || null);
  const cachedSnapshot = useCallback(
    () => localStorageStore.getSnapshot(key),
    [key],
  );
  const store = useSyncExternalStore(
    localStorageStore.subscribe,
    cachedSnapshot,
  );
  useEffect(() => {
    setStore(JSON.parse(store ?? "null"));
  }, [store, setStore]);

  const setItem = useCallback(
    (item: T | ((input?: T) => T)) => {
      const changedValue =
        item instanceof Function
          ? currentStore
            ? item(currentStore)
            : item()
          : item;
      localStorageStore.setLocalStorageState(key, changedValue);
    },
    [key, currentStore],
  );

  const removeItem = useCallback(() => {
    localStorageStore.setLocalStorageState(
      key,
      (typeof initialValue === "function" ? initialValue() : initialValue) ??
        null,
    );
  }, [key, initialValue]);

  return [currentStore, setItem, removeItem];
}

const localStorageStore = {
  getSnapshot(key: string) {
    return localStorage.getItem(key);
  },
  subscribe(listener: () => void) {
    window.addEventListener("storage", listener);
    window.addEventListener("local-storage", listener);
    return () => {
      window.removeEventListener("storage", listener);
      window.removeEventListener("local-storage", listener);
    };
  },
  setLocalStorageState<T>(key: string, newValue?: T) {
    if (typeof newValue === "undefined" || newValue === null) {
      window.localStorage.removeItem(key);
      window.dispatchEvent(new StorageEvent("storage", { key }));
      window.dispatchEvent(new StorageEvent("local-storage", { key }));
    }
    const parsedNewValue = JSON.stringify(newValue);
    window.localStorage.setItem(key, parsedNewValue);
    // On localStoage.setItem, the storage event is only triggered on other tabs and windows.
    // So we manually dispatch a storage event to trigger the subscribe function on the current window as well.
    window.dispatchEvent(
      new StorageEvent("storage", { key, newValue: parsedNewValue }),
    );
    window.dispatchEvent(
      new StorageEvent("local-storage", { key, newValue: parsedNewValue }),
    );
  },
};
