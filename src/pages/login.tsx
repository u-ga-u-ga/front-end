import { createFileRoute, useRouter } from "@tanstack/react-router";

import useAuth from "@/features/auth";
import { Button } from "@/shared/ui/button";

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
        className="flex w-full flex-col gap-5 p-3"
        onSubmit={(e) => {
          e.preventDefault();
          const { username } = Object.fromEntries(
            new FormData(e.currentTarget),
          );
          if (!username) return window.alert("글자를 입력해주세요.");
          auth.login(username as string);
          router.invalidate().finally(() => {
            navigate({ to: fallback });
          });
        }}
      >
        <label className="flex justify-center gap-2">
          이름
          <input
            name="username"
            className="border- border border-solid border-sky-300"
          />
        </label>
        <Button>로그인..!</Button>
      </form>
    </>
  );
}
