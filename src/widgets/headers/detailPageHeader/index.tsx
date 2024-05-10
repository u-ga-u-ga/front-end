import { HTMLAttributes } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { ChevronLeft, Share } from "lucide-react";

import copyTextToClipboard from "@/shared/lib/copyTextToClipboard";
import { cn } from "@/shared/lib/utils";
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
        "top-0 z-10 flex w-full justify-between p-4",
        className,
        styles.nav
      )}
      {...props}
    >
      <div className="flex gap-4">
        <button onClick={router.history.back}>
          <ChevronLeft />
        </button>
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
      <button onClick={() => copyTextToClipboard(window.location.href)}>
        <Share />
      </button>
    </nav>
  );
}
