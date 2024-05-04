import { createFileRoute, useRouter } from "@tanstack/react-router";

import useAuth from "@/features/auth";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

const fallback = "/";

function LoginComponent() {
  const auth = useAuth();
  const router = useRouter();
  const navigate = Route.useNavigate();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { username } = Object.fromEntries(
            new FormData(e.currentTarget)
          );
          if (!username) return window.alert("글자를 입력해주세요.");
          auth.login(username as string);
          router.invalidate().finally(() => {
            navigate({ to: fallback });
          });
        }}
      >
        <input name="username" />
        <button>로그인..!</button>
      </form>
    </>
  );
}
