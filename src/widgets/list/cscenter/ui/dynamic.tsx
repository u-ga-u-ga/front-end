import { CSCenterPostDto } from "@/entities/cscenter/api/types";
import { Separator } from "@/shared/ui/separator";

export default function CSCenterDynamicComponent({
  data,
}: {
  data: CSCenterPostDto[];
}) {
  return (
    <ul className="flex flex-col gap-3">
      {data.map((item) => (
        <li key={item.index} className="flex flex-col gap-1 py-2">
          <span className="font-body-">{item.title}</span>
          <span className="overflow-x-hidden text-ellipsis whitespace-nowrap">
            {item.content}
          </span>
          <span className="pb-4 text-gray-200">{item.author}</span>
          <Separator />
        </li>
      ))}
    </ul>
  );
}
