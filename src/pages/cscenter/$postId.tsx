import { createFileRoute } from "@tanstack/react-router";

import { cscenterQueryOptions } from "@/entities/cscenter/api/cscenterQueryOptions";
import CSNavigateBadgeList from "@/widgets/forms/csNavigateBadgeList";
import { CSCenterStaticComponent } from "@/widgets/list/cscenter";

export const Route = createFileRoute("/cscenter/$postId")({
  loader: ({ context: { queryClient }, params: { postId } }) => {
    return queryClient.ensureQueryData(
      cscenterQueryOptions({ postId: Number(postId) })
    );
  },
  component: CSCenterPostComponent,
});

const scrollTopCallbackRef = (ref: HTMLDetailsElement) => {
  if (ref) ref.parentElement?.scrollTo({ top: 0, behavior: "smooth" });
};

function CSCenterPostComponent() {
  const data = Route.useLoaderData();
  return (
    <main
      className="font-body-3 relative flex min-h-full w-full shrink-0 flex-col justify-start gap-9 p-8"
      ref={scrollTopCallbackRef}
    >
      <h1 className="font-body-1">{data.title}</h1>
      <pre className="whitespace-pre-wrap">{data.content}</pre>
      <CSNavigateBadgeList list={["치킨"]} />
      <CSCenterStaticComponent />
    </main>
  );
}
