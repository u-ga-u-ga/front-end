import { createFileRoute } from "@tanstack/react-router";

import useAuth from "@/features/auth";
import WithdrawalForm from "@/widgets/forms/withdrawalForm";
import WithdrawalPageHeader from "@/widgets/headers/withdrawalPageHeader";

export const Route = createFileRoute("/_auth/mypage/withdrawal")({
  component: WithdrawalComponent,
});

function WithdrawalComponent() {
  const auth = useAuth();
  return (
    <>
      <WithdrawalPageHeader />
      <div className="font-body-3 relative flex shrink-0 flex-col items-start justify-start gap-9 pl-8 pr-8">
        <div className="relative flex h-24 shrink-0 flex-col items-start justify-start gap-4 self-stretch">
          <div className="font-body-1">
            ...{auth.user}님과 이별인가요? 너무 아쉬워요
          </div>
          <div className="font-body-3">
            계정을 삭제하면 매너온도, 게시글, 관심, 채팅 등 모든 활동 정보가
            삭제됩니다. 계정 삭제후 7일간 다시 가입할 수 없어요.
          </div>
        </div>
        <WithdrawalForm auth={auth} />
      </div>
    </>
  );
}
