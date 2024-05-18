import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { cscenterQueryOptions } from "@/entities/cscenter/api/cscenterQueryOptions";
import useAuth from "@/features/auth";
import PageFooter from "@/widgets/footer";
import CSSearchForm from "@/widgets/forms/csSearchForm";
import CSCenterPageHeader from "@/widgets/headers/cscenterPageHeader/";
import {
  CSCenterDynamicComponent,
  CSCenterStaticComponent,
} from "@/widgets/list/cscenter";

export const Route = createFileRoute("/cscenter")({
  validateSearch: ({ keyword }: { keyword: string }) => {
    return {
      keyword,
    };
  },
  loaderDeps: ({ search: { keyword } }) => ({ keyword }),
  loader: ({ context: { queryClient }, deps }) => {
    if (!deps.keyword) return [];
    return queryClient.ensureQueryData(cscenterQueryOptions(deps));
  },
  component: CSCenterPageComponent,
});

function CSCenterPageComponent() {
  return (
    <div className="relative h-full w-full overflow-y-auto scrollbar-hide">
      <CSCenterPageHeader />
      <CSCenterPageMainComponent />
      <PageFooter />
    </div>
  );
}

function CSCenterPageMainComponent() {
  const { keyword } = Route.useSearch();
  const data = Route.useLoaderData();
  return (
    <main className="font-body-3 relative flex min-h-full w-full shrink-0 flex-col justify-start gap-9 p-8">
      <CSCustomedSearchForm keyword={keyword} />
      {keyword ? (
        <CSCenterDynamicComponent data={data} />
      ) : (
        <CSCenterStaticComponent />
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
