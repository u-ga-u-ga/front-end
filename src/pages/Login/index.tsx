import { createFileRoute } from "@tanstack/react-router";

import { Google, Kakao, Naver } from "@/shared/ui/icon";
import { LoginForm } from "@/widgets/forms";
import { LoginPageHeader } from "@/widgets/headers";

export const Route = createFileRoute("/Login/")({
  component: LoginPage,
});

export function LoginPage() {
  return (
    <div className="relative flex w-full flex-shrink-0 flex-col items-start gap-y-0 ">
      <LoginPageHeader />
      <div className="relative flex flex-1 flex-col self-stretch">
        <div className="relative flex flex-shrink-0 flex-col items-start gap-y-9 self-stretch pb-6 pl-8 pr-8 pt-6">
          <LoginForm />
        </div>
        <SocialLoginContainer />
      </div>
    </div>
  );
}

export default function SocialLoginContainer() {
  return (
    <div className="relative flex flex-shrink-0 flex-col items-start gap-y-9 self-stretch pb-6 pl-8 pr-8 pt-6">
      <div className="relative flex flex-shrink-0 items-center gap-x-6 self-stretch">
        <div className="relative flex h-px flex-shrink flex-grow basis-0 flex-col items-start gap-y-0 bg-gray-100" />
        <span className="font-body-4 relative flex-shrink-0 font-sans ">
          소셜 미디어로 로그인
        </span>
        <div className="relative flex h-px flex-shrink flex-grow basis-0 flex-col items-start gap-y-0 bg-gray-100" />
      </div>
      <div className="relative flex flex-shrink-0 items-center justify-center gap-x-9 self-stretch">
        <Kakao />
        <Naver />
        <Google />
      </div>
    </div>
  );
}
