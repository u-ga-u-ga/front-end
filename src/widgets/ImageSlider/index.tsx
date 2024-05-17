import { HTMLAttributes, ImgHTMLAttributes, useMemo, useState } from "react";
import { clsx } from "clsx";

import useMouseSnapSlide from "@/shared/lib/useMouseSnapSlide";
import { cn } from "@/shared/lib/utils";

export default function ImageSlider({
  srcList = [],
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { srcList?: string[] }) {
  const [highLight, setHighLight] = useState<number>(0);
  const { callbacks } = useMouseSnapSlide({ speed: 3 });
  return (
    <div className={cn("relative", className)} {...props}>
      <div
        role="scrollbar"
        className={cn(
          "relative flex h-[25rem] snap-x snap-mandatory",
          "overflow-x-auto scrollbar-hide"
        )}
        {...callbacks}
      >
        {srcList.map((src, idx) => (
          <ImageSliderItem
            index={idx}
            key={idx}
            dispatch={setHighLight}
            src={src}
            className="w-full flex-auto flex-shrink-0 snap-center snap-always object-cover"
            draggable={false}
          />
        ))}
      </div>
      <div className="bg-pink absolute bottom-5 z-10 flex w-full justify-center gap-2">
        {srcList.map((_, idx) => (
          <span
            key={idx}
            className={clsx(
              highLight === idx ? "bg-white" : "bg-white/50",
              "h-2 w-2 rounded-sm"
            )}
          />
        ))}
      </div>
    </div>
  );
}

const createObserveCallbackRef = (
  index: number,
  dispatch?: (index: number) => void,
  options?: IntersectionObserverInit
) => {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (
        entry.isIntersecting &&
        entry.intersectionRatio === options?.threshold &&
        dispatch
      ) {
        dispatch(index);
      }
    }
  }, options);
  return (ref: HTMLElement | null) => {
    if (ref) observer.observe(ref);
    else observer.disconnect();
  };
};

function ImageSliderItem({
  dispatch,
  index,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  dispatch?: (index: number) => void;
  index: number;
}) {
  const callbackRef = useMemo(
    () => createObserveCallbackRef(index, dispatch, { threshold: 1 }),
    [index, dispatch]
  );

  return <img ref={callbackRef} loading="lazy" {...props} />;
}
