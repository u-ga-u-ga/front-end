import { ElementType, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { ChevronRight, Heart } from "lucide-react";

import { cn } from "@/shared/lib/utils";

export type LinkContainerProps = HTMLAttributes<HTMLOrSVGElement> & {
  variant?: "primary" | "secondary";
  tagName?: ElementType;
  text: string;
  icon?: React.ReactNode;
  to?: string;
};

const containerVariants = cva("flex", {
  variants: {
    variant: {
      primary: "flex justify-between border-b py-4",
      secondary: "flex flex-col items-center gap-1 text-primary-dark gap-2.5",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function LinkContainer({
  tagName,
  variant = "primary",
  text,
  icon,
  className,
  ...props
}: LinkContainerProps) {
  const Tag = tagName ?? "div";
  return (
    <Tag className={cn(containerVariants({ variant, className }))} {...props}>
      {variant === "primary" && (
        <>
          <h2>{text}</h2>
          {icon ?? <ChevronRight width={16} height={16} stroke="gray" />}
        </>
      )}
      {variant === "secondary" && (
        <>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            {icon ?? <Heart />}
          </div>
          <span className="text-sm text-black">{text}</span>
        </>
      )}
    </Tag>
  );
}
