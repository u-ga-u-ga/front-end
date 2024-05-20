import { RefObject, useCallback, useSyncExternalStore } from "react";

export default (selector?: RefObject<HTMLElement>) => {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (selector?.current) {
        selector.current.addEventListener("scroll", onStoreChange);
        return () =>
          selector.current?.removeEventListener("scroll", onStoreChange);
      }
      window.addEventListener("scroll", onStoreChange);
      return () => {
        window.removeEventListener("scroll", onStoreChange);
      };
    },
    [selector]
  );
  const getSnapshot = useCallback(() => {
    if (selector?.current) {
      return selector.current.scrollTop;
    }
    return window.scrollY;
  }, [selector]);
  return useSyncExternalStore(subscribe, getSnapshot, getScrollServerSnapshot);
};

const getScrollServerSnapshot = () => {
  return 0;
};
