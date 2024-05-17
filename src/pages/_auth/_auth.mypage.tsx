import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

import useAuth from "@/features/auth";
import useMouseSnapSlide from "@/shared/lib/useMouseSnapSlide";
import ShoppingBag from "@/shared/ui/icon/bag.svg?react";
import BellIcon from "@/shared/ui/icon/bellOutline.svg?react";
import ChevronRight from "@/shared/ui/icon/chevronLeft.svg?react";
import DefaultUserProfile from "@/shared/ui/icon/defaultProfile.svg?react";
import Heart from "@/shared/ui/icon/heart.svg?react";
import HomeIcon from "@/shared/ui/icon/home.svg?react";
import ReceiptIcon from "@/shared/ui/icon/receipt.svg?react";
import ItemInfo from "@/shared/ui/itemInfo";
import { LinkContainerProps } from "@/shared/ui/linkContainer";
import LinkContainerList from "@/shared/ui/linkContainer/list";

export const Route = createFileRoute("/_auth/_auth/mypage")({
  component: MyPageComponent,
});

const headerLinkList = [
  { text: "관심목록", icon: <Heart /> },
  { text: "판매내역", icon: <ReceiptIcon /> },
  { text: "구매내역", icon: <ShoppingBag /> },
] satisfies LinkContainerProps[];

const footerLinkList = [
  { text: "채팅 관리" },
  { text: "내 정보 변경" },
  { text: "고객센터" },
  { text: "회원 탈퇴", to: "/mypage/withdrawal" },
] satisfies LinkContainerProps[];

const _tempSameCategoryImages_WILL_BE_REMOVED_AFTER_API_READY = Array(6).fill({
  src: "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_1280.jpg",
  itemName: "아크릴체어",
  price: 30000,
  date: "3일 전",
});

function MyPageComponent() {
  const { callbacks } = useMouseSnapSlide({ speed: 1 });
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
      <nav className="top-0 z-10 flex w-full items-center justify-between p-10">
        <span className="font-header-1">마이페이지</span>
        <div className="flex shrink-0 items-center gap-4">
          <Link to="/">
            <HomeIcon width={30} height={30} />
          </Link>
          <div className="flex items-center justify-center">
            <BellIcon width={40} height={40} />
          </div>
        </div>
      </nav>
      <main className="flex w-full flex-col gap-10 overflow-scroll p-8 scrollbar-hide">
        <div className="flex items-center justify-between gap-10">
          <div className="relative flex shrink-0 flex-row items-center justify-start gap-4 self-stretch ">
            <DefaultUserProfile
              height={64}
              width={64}
              className="text-gray-200"
            />
            <div className="flex flex-col text-sm text-black">
              <span className="font-body-3 font-bold">{auth.user}</span>
              <span className="font-body-4 text-gray-500">
                중랑구 면목동 #1234abcd
              </span>
            </div>
          </div>
          <button onClick={handleLogout}>
            <ChevronRight
              transform="rotate(180)"
              width={16}
              height={16}
              className="text-gray-500"
            />
          </button>
        </div>
        <LinkContainerList variant="secondary" list={headerLinkList} />
        <div>
          <div className="flex justify-between">
            <h2>최근 본 상품</h2>
            <ChevronRight
              transform="rotate(180)"
              width={16}
              height={16}
              className="text-gray-500"
            />
          </div>

          <div
            className="relative flex shrink-0 flex-row items-start justify-start gap-4 self-stretch overflow-auto pb-2 pt-2 scrollbar-hide"
            {...callbacks}
          >
            {_tempSameCategoryImages_WILL_BE_REMOVED_AFTER_API_READY.map(
              (_itemInfo, idx) => (
                <ItemInfo key={idx} {..._itemInfo} />
              )
            )}
          </div>
        </div>
        <LinkContainerList list={footerLinkList} />
      </main>
    </div>
  );
}
