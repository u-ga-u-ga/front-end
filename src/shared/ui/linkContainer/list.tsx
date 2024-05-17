import { cva } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

import LinkContainer from ".";

type LinkContainerListProps = {
  variant?: "primary" | "secondary";
  list: React.ComponentProps<typeof LinkContainer>[];
  className?: string;
};

const listVariants = cva("flex", {
  variants: {
    variant: {
      primary: "flex-col gap-2 py-4",
      secondary: "w-full flex-1 justify-between p-4",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function LinkContainerList({
  list = [],
  variant = "primary",
  className,
}: LinkContainerListProps) {
  return (
    <ul className={cn(listVariants({ variant, className }))}>
      {list.map((item, idx) => (
        <LinkContainer
          key={`${item.text}${idx}`}
          tagName={variant === "primary" ? "li" : "div"}
          variant={variant}
          {...item}
        />
      ))}
    </ul>
  );
}
