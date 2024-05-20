import {
  CSSProperties,
  HTMLAttributes,
  RefObject,
  useDeferredValue,
} from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { Share } from "lucide-react";

import copyTextToClipboard from "@/shared/lib/copyTextToClipboard";
import useScrollYRef from "@/shared/lib/useScrollYRef";
import { cn } from "@/shared/lib/utils";
import ChevronLeft from "@/shared/ui/icon/chevronLeft.svg?react";
import HomeIcon from "@/shared/ui/icon/home.svg?react";

import styles from "./index.module.css";

type DetailPageHeaderProps = HTMLAttributes<HTMLElement> & {
  _parent?: RefObject<HTMLElement>;
};

const calculatePosition = (position: number, standard = 1) => {
  const calculatedScroll =
    position > window.innerHeight ? 1 : position / window.innerHeight;
  return Math.floor(calculatedScroll * 255) * standard;
};

export default function DetailPageHeader({
  className,
  _parent,
  ...props
}: DetailPageHeaderProps) {
  const router = useRouter();
  const scrollY = useScrollYRef(_parent);
  const deferedPosition = useDeferredValue(scrollY);
  const calculatedPosition = calculatePosition(deferedPosition, 4);

  return (
    <nav
      className={cn(
        "sticky top-0 z-10 flex h-[6.875rem] w-full justify-between gap-2.5 p-4",
        styles.nav,
        className
      )}
      style={
        {
          "--header-color": `rgb(${Array(3)
            .fill(255 - calculatedPosition)
            .join(",")})`,
          "--header-background-opacity": calculatedPosition / 255,
        } as CSSProperties
      }
      {...props}
    >
      <div className="relative flex shrink-0 flex-row items-center justify-start gap-2.5">
        <button
          className="relative flex h-10 w-10 shrink-0 flex-row items-center justify-center gap-2.5 overflow-hidden px-1.5 py-1"
          title="back"
          onClick={router.history.back}
        >
          <div className="relative h-6 w-6 shrink-0 overflow-hidden">
            <ChevronLeft />
          </div>
        </button>
        <Link
          className="relative flex h-10 w-10 shrink-0 flex-row items-center justify-center gap-2.5 overflow-hidden px-1.5 py-1"
          title="home"
          to="/"
        >
          <HomeIcon />
        </Link>
      </div>
      <button
        onClick={() => copyTextToClipboard(window.location.href)}
        title="share"
      >
        <Share />
      </button>
    </nav>
  );
}
