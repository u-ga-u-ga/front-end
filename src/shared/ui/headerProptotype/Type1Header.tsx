import React from "react";

export function Type1Header({
  title = "title",
  RightButtons = [],
}: {
  title: string;
  RightButtons: React.ReactElement[];
}) {
  return (
    <div className="relative flex h-[111px] flex-shrink-0 items-center justify-between gap-x-72 self-stretch px-9 py-0">
      <span className="font-header-1 relative flex-shrink-0 text-left font-sans  text-black">
        {title}
      </span>
      <div className="relative flex h-10 flex-shrink-0 items-center gap-x-3">
        {RightButtons}
      </div>
    </div>
  );
}
