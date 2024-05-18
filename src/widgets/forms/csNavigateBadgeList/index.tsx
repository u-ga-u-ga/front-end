import { Link } from "@tanstack/react-router";

import { Badge } from "@/shared/ui";

export default function CSNavigateBadgeList({
  list = [],
}: {
  list?: string[];
}) {
  return (
    <div className="flex flex-wrap gap-4">
      {list.map((keyword) => (
        <Link
          key={keyword}
          search={{
            keyword,
          }}
        >
          <Badge type="outline" label={keyword} color="gray" />
        </Link>
      ))}
    </div>
  );
}
