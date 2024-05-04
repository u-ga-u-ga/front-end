import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/mypage")({
  component: () => <div>Hello /mypage!</div>,
});
