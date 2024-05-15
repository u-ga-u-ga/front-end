import { useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";

import { Button, CrossIcon, Input } from "@/shared/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export const Route = createFileRoute("/_auth/mypage/withdrawal")({
  component: WithdrawalComponent,
});

const staticSelectValues = [
  "선택해주세요.",
  "너무 많이 이용해요",
  "사고 싶은 물품이 없어요",
  "물품이 안팔려요",
  "비매너 사용자를 만났어요",
  "억울하게 이용이 제한됐어요",
  "알림이 너무 많이 와요",
  "새 계정을 만들고 싶어요",
  "기타",
] as const;

function WithdrawalComponent() {
  const router = useRouter();
  const [selectedReason, setReason] = useState<
    (typeof staticSelectValues)[number] | NonNullable<unknown>
  >("");
  const [reasonText, setReasonText] = useState("");
  return (
    <>
      <div className="relative flex h-[6.875rem] items-center justify-start gap-6 self-stretch px-8 py-0">
        <button onClick={router.history.back}>
          <CrossIcon />
        </button>
        <span className="font-header-1">탈퇴하기</span>
      </div>
      <div className="font-body-3 relative flex shrink-0 flex-col items-start justify-start gap-9 pl-8 pr-8">
        <div className="relative flex h-24 shrink-0 flex-col items-start justify-start gap-4 self-stretch">
          <div className="font-body-1">
            ...민트초코마라탕님과 이별인가요? 너무 아쉬워요
          </div>
          <div className="font-body-3">
            계정을 삭제하면 매너온도, 게시글, 관심, 채팅 등 모든 활동 정보가
            삭제됩니다. 계정 삭제후 7일간 다시 가입할 수 없어요.
          </div>
        </div>
        <div className="relative flex shrink-0 flex-col items-start justify-start gap-0 self-stretch">
          <div className="font-body-1 relative flex shrink-0 flex-row items-center justify-start gap-2.5 self-stretch py-6">
            민트초코마라탕님이 계정을 삭제하려는 이유가 궁금해요.
          </div>
          <Select onValueChange={setReason}>
            <SelectTrigger className="font-body-3 h-16 w-full py-6">
              <SelectValue placeholder="선택해주세요." />
            </SelectTrigger>
            <SelectContent>
              {staticSelectValues.map((value) => (
                <SelectItem key={value} value={value} className="py-6">
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {selectedReason === staticSelectValues.at(-1) && (
          <Input
            value={reasonText}
            onChange={(e) => setReasonText(e.target.value)}
            placeholder="계정을 삭제하려는 이유를 알려주세요."
          />
        )}
        {
          /** 선택이유가 있는 경우에만 렌더링한다. */
          selectedReason && selectedReason !== staticSelectValues[0] && (
            <>
              <pre className="font-body-3 relative flex h-24 shrink-0 flex-col items-start justify-start gap-4 self-stretch overflow-x-hidden text-ellipsis whitespace-pre-wrap">
                {
                  "말씀해주신 소중한 의견을 반영하여 더 따뜻한 서비스를 만들어 가도록 노력할게요.\n언제나 이자리에서 기다리고 있을게요. 언제든지 돌아와주세요. 지금까지 함께여서 진심으로 행복했어요."
                }
              </pre>
              <div className="font-body-3 relative flex shrink-0 justify-between gap-4 self-stretch">
                <Button className="w-1/2" variant={"outline"}>
                  취소
                </Button>
                <Button
                  className="w-1/2"
                  disabled={
                    selectedReason === staticSelectValues.at(-1) && !reasonText
                  }
                >
                  제출
                </Button>
              </div>
            </>
          )
        }
      </div>
    </>
  );
}
