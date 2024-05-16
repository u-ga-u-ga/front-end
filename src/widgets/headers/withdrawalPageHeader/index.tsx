import { useRouter } from "@tanstack/react-router";

import { CrossIcon } from "@/shared/ui";

export default function WithdrawalPageHeader() {
  const router = useRouter();

  return (
    <div className="relative flex h-[6.875rem] items-center justify-start gap-6 self-stretch px-8 py-0">
      <button onClick={router.history.back}>
        <CrossIcon />
      </button>
      <span className="font-header-1">탈퇴하기</span>
    </div>
  );
}
