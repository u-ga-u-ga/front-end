import { Link } from "@tanstack/react-router";

import { Button } from "@/shared/ui";
import { LinkContainerProps } from "@/shared/ui/linkContainer";
import LinkContainerList from "@/shared/ui/linkContainer/list";

const footerLinkList = [
  { text: "채팅 관리" },
  { text: "내 정보 변경" },
  { text: "고객센터", to: "/cscenter" },
  { text: "회원 탈퇴", to: "/mypage/withdrawal" },
] satisfies LinkContainerProps[];

export default function CSCenterStaticComponent() {
  return (
    <>
      <div>
        <h2 className="font-body-2">자주 묻는 질문</h2>
        <LinkContainerList list={footerLinkList} />
      </div>
      <div className="flex flex-col gap-2.5">
        <h2 className="font-body-2">도움이 필요하신가요?</h2>
        <Link>
          <Button size="sm">문의하기</Button>
        </Link>
      </div>
    </>
  );
}
