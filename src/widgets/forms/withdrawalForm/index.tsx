import { useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";

import { AuthContext } from "@/features/auth";
import { Button, Input } from "@/shared/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

const staticSelectMap = [
  {
    key: "선택해주세요.",
    message: "",
    linkList: [],
  },
  {
    key: "너무 많이 이용해요",
    message:
      "앗, 그렇다면 저와 함께 조금 덜 사용하는 방법을 고민해봐요. 이렇게 떠나시면 너무 슬픈걸요. 계정 삭제 대신 모든 알림을 끄고 잠시 쉬어보는 건 어떠세요?",
    linkList: [],
  },
  {
    key: "사고 싶은 물품이 없어요",
    message:
      "혹시 사고싶은 물품을 검색해보거나 키워드 알림으로 등록해보셨나요? 키워드 알림으로 등록하면 물품이 올라오자마자 알림이 온답니다. 키워드를 등록하고 알림을 기다려보세요.\n정확한 상품명이 아닌 가방, 운동화 같은 상위 카테고리의 키워드를 등록하면 알림을 더 많이 받을 수 있어요. (예, 침대, 의자)",
    linkList: [{ to: "/list", text: "지금 검색하러 가기" }],
  },
  {
    key: "억울하게 이용이 제한됐어요",
    message:
      "불쾌한 경험을 드려서 죄송해요. 가구고고는 아래와 같은 정책을 따르고 있습니다.",
    linkList: [{ to: "/mypage", text: "가구고고 운영정책" }],
  },
  {
    key: "기타",
    message:
      "말씀해주신 소중한 의견을 반영하여 더 따뜻한 서비스를 만들어 가도록 노력할게요.\n언제나 이자리에서 기다리고 있을게요. 언제든지 돌아와주세요. 지금까지 함께여서 진심으로 행복했어요.",
    linkList: [],
  },
] as const;

type staticSelectKeys =
  | (typeof staticSelectMap)[number]["key"]
  | NonNullable<unknown>;
export default function WithdrawalForm({ auth }: { auth: AuthContext }) {
  const router = useRouter();
  const [selectedReason, setReason] = useState<staticSelectKeys>("");
  const [reasonText, setReasonText] = useState("");
  const currentSelected = staticSelectMap.find(
    (item) => item.key === selectedReason
  );
  /** '기타'가 선택된 상태 */
  const etcSelected = selectedReason === staticSelectMap.at(-1)?.key;
  return (
    <>
      <div className="relative flex shrink-0 flex-col items-start justify-start gap-0 self-stretch">
        <div className="font-body-1 relative flex shrink-0 flex-row items-center justify-start gap-2.5 self-stretch py-6">
          {auth.user}님이 계정을 삭제하려는 이유가 궁금해요.
        </div>
        <Select onValueChange={setReason}>
          <SelectTrigger className="font-body-3 h-16 w-full py-6">
            <SelectValue placeholder="선택해주세요." />
          </SelectTrigger>
          <SelectContent>
            {staticSelectMap.map(({ key }) => (
              <SelectItem key={key} value={key} className="py-6">
                {key}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {etcSelected && (
        <Input
          value={reasonText}
          onChange={(e) => setReasonText(e.target.value)}
          placeholder="계정을 삭제하려는 이유를 알려주세요."
        />
      )}
      {
        /** 선택이유가 있는 경우에만 렌더링한다. */
        selectedReason && selectedReason !== staticSelectMap[0].key && (
          <>
            <pre className="font-body-3 relative flex shrink-0 flex-col items-start justify-start gap-4 self-stretch overflow-x-hidden text-ellipsis whitespace-pre-wrap">
              {currentSelected?.message}
            </pre>
            <ul>
              {currentSelected?.linkList.map((_item) => (
                <li key={_item.to} className="text-primary-dark underline">
                  <Link to={_item.to}>{_item.text}</Link>
                </li>
              ))}
            </ul>
            <div className="font-body-3 relative flex shrink-0 justify-between gap-4 self-stretch">
              <Button
                className="w-1/2"
                variant="outline"
                onClick={router.history.back}
              >
                취소
              </Button>
              <Button className="w-1/2" disabled={etcSelected && !reasonText}>
                제출
              </Button>
            </div>
          </>
        )
      }
    </>
  );
}
