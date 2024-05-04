import { createFileRoute, Link } from "@tanstack/react-router";

import useAuth from "@/features/auth";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const auth = useAuth();
  return (
    <div className="p-2">
      <h3>Welcome Home! {auth.user || "로그인 해주세요..."}</h3>
      <Link to="/mypage"> 마이페이지로...</Link>
      <Link to="/login"> 로그인.....</Link>
    </div>
  );
}
