import { forwardRef, InputHTMLAttributes } from "react";

import { cn } from "@/shared/lib/utils";

import { Search } from "../icon";

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  onSearchButtonClick?: React.MouseEventHandler;
};

const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ onSearchButtonClick, className, ...props }, ref) => {
    return (
      <div className="peer relative h-[78px] w-full">
        <input
          ref={ref}
          className={cn(
            "font-body-3 relative h-full w-full flex-1 rounded-lg bg-primary-light px-6 text-left placeholder:text-gray-500 placeholder:text-opacity-50",
            className
          )}
          {...props}
        />
        <button
          className="absolute right-2.5 h-full"
          onClick={onSearchButtonClick}
        >
          <Search />
        </button>
      </div>
    );
  }
);
SearchBox.displayName = "SearchBox";

export default SearchBox;
