import * as React from "react";

import { cn } from "@/shared/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, value = "defaultValue", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "placeholder flex h-16 items-center gap-2.5 self-stretch rounded border border-gray-200 p-4 font-sans leading-[140%] text-gray-950",
          className,
        )}
        ref={ref}
        value={value}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
