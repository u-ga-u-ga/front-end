import { FormEventHandler } from "react";
import {
  createFileRoute,
  Link,
  redirect,
  useRouter,
} from "@tanstack/react-router";

import useAuth from "@/features/auth";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import GoogleIcon from "@/shared/ui/Icon/google.svg?react";
import HomeIcon from "@/shared/ui/Icon/home.svg?react";
import KakaoIcon from "@/shared/ui/Icon/kakao.svg?react";
import NaverIcon from "@/shared/ui/Icon/naver.svg?react";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
  beforeLoad: ({ context, search }) => {
    const { savedState, login } = context.auth;
    const { autoLogin, user } = savedState || {};
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: search.redirect || "/",
      });
    }
    if (autoLogin === true && user) {
      login(user);
    }
  },
  validateSearch: ({ redirect }: { redirect?: string }) => {
    if (redirect)
      return {
        redirect: redirect || "",
      };
    return {};
  },
});

const fallback = "/";

function LoginComponent() {
  const { login, savedState, saveLoginInfo } = useAuth();
  const router = useRouter();
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  console.log(navigate);
  const onLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { username, isSave, autoLogin } = Object.fromEntries(
      new FormData(e.currentTarget),
    );
    if (!username) return window.alert("글자를 입력해주세요.");
    saveLoginInfo({
      user: username as string,
      isSave: Boolean(isSave),
      autoLogin: Boolean(autoLogin),
    });
    login(username as string);
    router.invalidate().finally(() => {
      navigate({ to: search.redirect || fallback });
    });
  };
  return (
    <div className="flex flex-col gap-16">
      <header className="m-8 flex items-center justify-between">
        <span className="text-[30px]">로그인</span>
        <Link to={fallback}>
          <HomeIcon />
        </Link>
      </header>
      <form className="flex w-full flex-col gap-5 px-10" onSubmit={onLogin}>
        <input
          name="username"
          placeholder="아이디"
          {...(savedState?.isSave &&
            savedState.user && { defaultValue: savedState.user })}
          className="rounded-[5px] border border-solid border-black/70 p-4 text-sm"
        />
        <input
          name="password"
          placeholder="비밀번호"
          className="rounded-[5px] border border-solid border-black/70 p-4 text-sm"
        />
        <div className="flex justify-between px-3">
          <label className="flex items-center gap-2">
            자동 로그인
            <Checkbox name="autoLogin" defaultChecked={savedState?.autoLogin} />
          </label>
          <label className="flex items-center gap-2">
            아이디 저장
            <Checkbox name="isSave" defaultChecked={savedState?.isSave} />
          </label>
        </div>
        <Button>로그인</Button>
      </form>
      <hr
        data-text="소셜 미디어로 로그인"
        className="relative overflow-visible after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:bg-white after:p-2 after:content-[attr(data-text)]"
      />
      <div className="mx-auto flex w-[min(20rem,80%)] justify-between">
        <Link>
          <NaverIcon />
        </Link>
        <Link>
          <KakaoIcon />
        </Link>
        <Link>
          <GoogleIcon />
        </Link>
      </div>
    </div>
  );
}
