import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  FileSpreadsheet,
  Heart,
  ShoppingBag,
  WalletCards,
} from "lucide-react";

import useAuth from "@/features/auth";
import DefaultUserProfile from "@/shared/ui/icon/defaultProfile.svg?react";
import HomeIcon from "@/shared/ui/icon/home.svg?react";
import { LinkContainerProps } from "@/shared/ui/linkContainer";
import LinkContainerList from "@/shared/ui/linkContainer/list";

export const Route = createFileRoute("/_auth/_auth/mypage")({
  component: MyPageComponent,
});

const headerLinkList = [
  { text: "관심목록", icon: <Heart fill="var(--primary)" /> },
  { text: "판매내역", icon: <FileSpreadsheet /> },
  { text: "구매내역", icon: <ShoppingBag /> },
  { text: "가계부", icon: <WalletCards /> },
] satisfies LinkContainerProps[];

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
          <div className="flex items-center gap-4 text-gray-200">
            <DefaultUserProfile height={64} width={64} />
            <div className="flex flex-col text-sm text-black">
              <span className="font-body-3 font-bold">{auth.user}</span>
              <span className="font-body-4 text-gray-500">
                중랑구 면목동 #1234abcd
              </span>
            </div>
          </div>
          <button onClick={handleLogout}>
            <ChevronRight stroke="gray" />
          </button>
        </div>
        <LinkContainerList variant="secondary" list={headerLinkList} />
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
