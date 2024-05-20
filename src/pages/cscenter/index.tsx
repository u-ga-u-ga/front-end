import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { cscenterQueryListOptions } from "@/entities/cscenter/api/cscenterQueryOptions";
import useAuth from "@/features/auth";
import CSNavigateBadgeList from "@/widgets/forms/csNavigateBadgeList";
import CSSearchForm from "@/widgets/forms/csSearchForm";
import {
  CSCenterDynamicComponent,
  CSCenterStaticComponent,
} from "@/widgets/list/cscenter";

export const Route = createFileRoute("/cscenter/")({
  validateSearch: ({ keyword }: { keyword: string }) => {
    return {
      keyword,
    };
  },
  loaderDeps: ({ search: { keyword } }) => ({ keyword }),
  loader: ({ context: { queryClient }, deps }) => {
    if (!deps.keyword) return [];
    return queryClient.ensureQueryData(cscenterQueryListOptions(deps));
  },
  component: CSCenterPageMainComponent,
});

const searchTemplateKeywords = [
  "신혼가구",
  "레트로",
  "모던",
  "트렌디가구",
  "부드러운소파",
  "이케아",
  "클래식가구",
  "미니컬리즘",
  "주방용품",
  "화이트",
  "캠핑",
  "테이블",
];

function CSCenterPageMainComponent() {
  const { keyword } = Route.useSearch();
  const data = Route.useLoaderData();
  return (
    <main className="font-body-3 relative flex min-h-full w-full shrink-0 flex-col justify-start gap-9 p-8">
      <CSCustomedSearchForm keyword={keyword} />
      {keyword ? (
        <CSCenterDynamicComponent data={data} />
      ) : (
        <>
          <CSNavigateBadgeList list={searchTemplateKeywords} />
          <CSCenterStaticComponent />
        </>
      )}
    </main>
  );
}

function CSCustomedSearchForm({ keyword = "" }: { keyword?: string }) {
  const auth = useAuth();
  const navigate = Route.useNavigate();
  const [text, setText] = useState("");
  useEffect(() => setText(keyword), [keyword]);

  return (
    <>
      {!keyword && (
        <pre className="font-body-1">
          {`${auth.user}님,\n무엇을 도와드릴까요? 🚪`}
        </pre>
      )}
      <CSSearchForm
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="궁금한 것을 검색해보세요"
        onSearch={(keyword) =>
          navigate({
            search: {
              keyword,
            },
          })
        }
      />
    </>
  );
}
