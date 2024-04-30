import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  loader: ({ context: { queryClient } }) => queryClient,
  component: PostsComponent,
});

function PostsComponent() {
  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">상세페이지입니다...</ul>
      <hr />
      <Outlet />
    </div>
  );
}
