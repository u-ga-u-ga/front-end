import { cn } from "@/shared/lib/utils";

import LinkContainer from ".";

type LinkContainerListProps = {
  list: { text: string; icon?: React.ReactNode }[];
  className?: string;
};

export default function LinkContainerList({
  list = [],
  className,
}: LinkContainerListProps) {
  return (
    <ul className={cn("flex flex-col gap-2 py-4", className)}>
      {list.map((item, idx) => (
        <LinkContainer
          key={`${item.text}${idx}`}
          tagName="li"
          text={item.text}
          icon={item.icon}
        />
      ))}
    </ul>
  );
}
