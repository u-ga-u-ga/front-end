import { ElementType, HTMLAttributes } from "react";
import { ChevronRight } from "lucide-react";

import { cn } from "@/shared/lib/utils";

export type LinkContainerProps = HTMLAttributes<HTMLOrSVGElement> & {
  tagName?: ElementType;
  text: string;
  icon?: React.ReactNode;
};

export default function LinkContainer({
  tagName,
  text,
  icon,
  className,
  ...props
}: LinkContainerProps) {
  const Tag = tagName ?? "div";
  return (
    <Tag
      className={cn("flex justify-between border-b py-4", className)}
      {...props}
    >
      <h2>{text}</h2>
      {icon ?? <ChevronRight width={16} height={16} stroke="gray" />}
    </Tag>
  );
}
