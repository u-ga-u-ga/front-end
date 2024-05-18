export type HeaderProps_EXPERIMENTAL = {
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  title: string;
};

import { cn } from "@/shared/lib/utils";

export default function CommonHeaderComponent_EXPERIMENTAL({
  leftElement,
  rightElement,
  title,
}: HeaderProps_EXPERIMENTAL) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-10 flex h-[6.875rem] items-center justify-between self-stretch bg-white px-8 py-0"
      )}
    >
      {leftElement}
      <div className="font-header-1 absolute left-1/2 top-1/2 box-content flex translate-x-[-50%] translate-y-[-50%] items-center justify-center gap-2.5 overflow-visible text-center font-sans text-black">
        <span>{title}</span>
      </div>
      {rightElement}
    </nav>
  );
}
