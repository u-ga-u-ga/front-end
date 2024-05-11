import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  CircleUserRound,
  FileSpreadsheet,
  Heart,
  ShoppingBag,
  WalletCards,
} from "lucide-react";

import useAuth from "@/features/auth";
import HomeIcon from "@/shared/ui/icon/home.svg?react";
import { LinkContainerProps } from "@/shared/ui/linkContainer";
import LinkContainerList from "@/shared/ui/linkContainer/list";

export const Route = createFileRoute("/_auth/_auth/mypage")({
  component: MyPageComponent,
});

const footerLinkList = [
  { text: "채팅 관리" },
  { text: "내 정보 변경" },
  { text: "고객센터" },
  { text: "회원 탈퇴" },
] satisfies LinkContainerProps[];

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
    <div className="relative h-full w-full">
      <nav className="top-0 z-10 flex w-full justify-between p-4">
        <span className="font-header-1">마이페이지</span>
        <div className="flex gap-4">
          <Link to="/">
            <HomeIcon stroke="black" />
          </Link>
          <Bell stroke="black" />
        </div>
      </nav>
      <main className="w-full overflow-scroll p-4 scrollbar-hide">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <CircleUserRound height={30} width={30} />
            <div className="flex flex-col text-sm">
              <span className="font-bold">{auth.user}</span>
              <span className="text-xs text-slate-400">
                중랑구 면목동 #1234abcd
              </span>
            </div>
          </div>
          <button onClick={handleLogout}>
            <ChevronRight stroke="gray" />
          </button>
        </div>
        <div className="flex w-full flex-1 justify-between p-4">
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
              <Heart fill="var(--primary)" />
            </div>
            <span className="text-sm">관심목록</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
              <FileSpreadsheet />
            </div>
            <span className="text-sm">판매내역</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
              <ShoppingBag />
            </div>
            <span className="text-sm">구매내역</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
              <WalletCards />
            </div>
            <span className="text-sm">가계부</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h2>최근 본 상품</h2>
            <ChevronRight stroke="gray" />
          </div>
          <div className="mt-4 h-24 rounded-sm bg-slate-300"></div>
        </div>
        <LinkContainerList list={footerLinkList} />
      </main>
    </div>
  );
}
