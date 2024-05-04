import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

import useAuth from "@/features/auth";

export const Route = createFileRoute("/_auth/_auth/mypage")({
  component: MyPageComponent,
});

function MyPageComponent() {
  const auth = useAuth();
  const router = useRouter();
  const navigate = Route.useNavigate();
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      auth.logout();
      router.invalidate().finally(() => {
        navigate({ to: "/" });
      });
    }
  };
  return (
    <div>
      <h1>{auth.user} 의 정보 페이지입니다</h1>

      <h1>Authenticated Route</h1>
      <p>This route's content is only visible to authenticated users.</p>
      <ul className="flex gap-2 py-2">
        <li>
          <button
            type="button"
            className="hover:underline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
      <Link to="/">홈 화면</Link>
    </div>
  );
}
