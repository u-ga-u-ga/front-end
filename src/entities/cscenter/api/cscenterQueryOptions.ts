import { queryOptions } from "@tanstack/react-query";

import { CSCenterPostDto } from "./types";

export const cscenterQueryOptions = ({
  keyword = "",
}: { keyword?: string } = {}) =>
  queryOptions({
    queryKey: ["cscenter", { keyword }],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 1000));
      return Array.from(
        { length: 20 },
        (_, idx): CSCenterPostDto => ({
          index: idx + 1,
          title: `${keyword}${idx + 1}`,
          category: "현재 없음",
          content: "내용입니다.".repeat(Math.floor(Math.random() * 100)),
          date: new Date().toISOString(),
          author: "가구고고",
        })
      );
    },
  });
