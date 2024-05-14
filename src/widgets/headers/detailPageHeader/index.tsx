import { HTMLAttributes } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { Share } from "lucide-react";

import copyTextToClipboard from "@/shared/lib/copyTextToClipboard";
import { cn } from "@/shared/lib/utils";
import ChevronLeft from "@/shared/ui/icon/chevronLeft.svg?react";
import HomeIcon from "@/shared/ui/icon/home.svg?react";

import styles from "./index.module.css";

type DetailPageHeaderProps = HTMLAttributes<HTMLElement>;

export default function DetailPageHeader({
  className,
  ...props
}: DetailPageHeaderProps) {
  const router = useRouter();
  return (
    <nav
      className={cn(
        "top-0 z-10 flex w-full justify-between gap-2.5 p-4",
        styles.nav,
        className
      )}
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
