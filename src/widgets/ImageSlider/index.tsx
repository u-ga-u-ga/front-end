import {
  HTMLAttributes,
  ImgHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { clsx } from "clsx";

import { cn } from "@/shared/lib/utils";

export default function ImageSlider({
  srcList = [],
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { srcList?: string[] }) {
  const [highLight, setHighLight] = useState<number>(0);
  const isMouseDownRef = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);
  return (
    <div className={cn("relative", className)} {...props}>
      <div
        role="scrollbar"
        className={cn(
          "relative flex h-[25rem] snap-x snap-mandatory",
          "scrollbar-hide overflow-x-auto",
        )}
        onMouseDown={(e) => {
          const { currentTarget } = e;
          isMouseDownRef.current = true;
          startX.current = e.pageX - currentTarget.offsetLeft;
          scrollLeftRef.current = currentTarget.scrollLeft;
          currentTarget.style.scrollSnapType = "none";
        }}
        onMouseLeave={async (e) => {
          isMouseDownRef.current = false;
          e.currentTarget.style.removeProperty("scroll-snap-type");
        }}
        onMouseUp={async (e) => {
          isMouseDownRef.current = false;
          e.currentTarget.style.removeProperty("scroll-snap-type");
        }}
        onMouseMove={(e) => {
          if (!isMouseDownRef.current) return;
          e.preventDefault();
          const { currentTarget } = e;
          const x = e.pageX - currentTarget.offsetLeft;
          const walk = x - startX.current;
          currentTarget.scrollLeft = scrollLeftRef.current - walk;
        }}
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
              "h-2 w-2 rounded-sm",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function ImageSliderItem({
  dispatch,
  index,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  dispatch?: (index: number) => void;
  index: number;
}) {
  const itemRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (observers) => {
        for (const observe of observers) {
          if (
            observe.isIntersecting &&
            observe.intersectionRatio === 1 &&
            dispatch
          ) {
            dispatch(index);
          }
        }
      },
      { threshold: 1 },
    );
    itemRef.current && observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [index, dispatch]);
  return <img ref={itemRef} {...props}></img>;
}
