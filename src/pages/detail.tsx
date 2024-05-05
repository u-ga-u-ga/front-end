import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Heart,
  HomeIcon,
  Share,
} from "lucide-react";

import { Button } from "@/shared/ui/button";
import ImageSlider from "@/widgets/ImageSlider";

export const Route = createFileRoute("/detail")({
  component: DetailComponent,
});

function DetailComponent() {
  const router = useRouter();
  return (
    <div className="relative h-full w-full">
      <nav className="absolute top-0 z-10 flex w-full justify-between p-4">
        <div className="flex gap-4">
          <button onClick={router.history.back}>
            <ChevronLeft stroke="white" />
          </button>
          <Link to="/">
            <HomeIcon stroke="white" />
          </Link>
        </div>
        <button
          onClick={async () => {
            if (navigator.clipboard) {
              try {
                await navigator.clipboard.writeText(window.location.href);
                alert("copy success!!");
              } catch {
                alert("copy failed");
              }
            } else {
              const _dummy = document.createElement("textarea");
              _dummy.value = window.location.href;
              document.body.appendChild(_dummy);
              _dummy.select();
              document.execCommand("copy");
              document.body.removeChild(_dummy);
            }
          }}
        >
          <Share stroke="white" />
        </button>
      </nav>
      <main className="h-full w-full overflow-scroll scrollbar-hide">
        <ImageSlider
          srcList={Array(10).fill(
            "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_1280.jpg",
          )}
        />
        <div className="min-h-[calc(100%-400px) mb-16 [&>div]:p-4">
          <div className="flex items-center justify-start gap-2 ">
            <CircleUserRound height={30} width={30} />
            <div className="flex flex-col text-sm">
              <span className="font-bold">유저 닉네임</span>
              <span>중랑구 면목동</span>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-3 ">
            <h1 className="font-bold">소니 Wh-1000xm5 실버 팝니다.</h1>
            <div className="flex gap-2 text-sm text-slate-400">
              <span>디지털기기</span>
              <span>끌올 1일 전</span>
            </div>
            <pre>
              {"8/31일 해외 직구 한\n한달도 안된 제품 입니다.\n박풀 S급입니다."}
            </pre>
          </div>
          <hr />
          <div>
            <div className="flex justify-between">
              <h2>거래 희망 장소</h2>
              <ChevronRight />
            </div>
            <div className="mt-4 h-24 rounded-sm bg-slate-300"></div>
          </div>
          <hr />
          <div>
            <div className="flex justify-between">
              <h2>디지털기기 찾으시나요?</h2>
              <ChevronRight />
            </div>
            <div className="mt-4 h-24 rounded-sm bg-slate-300"></div>
          </div>
          <div className="h-[2000px]"></div>
        </div>
      </main>
      <footer className="absolute bottom-0 flex h-16 w-full items-center justify-between gap-3 border-t border-solid border-slate-300 bg-white p-2">
        <Heart
          className="text-slate-500"
          onClick={(e) => {
            const { currentTarget } = e;
            if (currentTarget.style.fill) {
              currentTarget.style.removeProperty("fill");
            } else {
              currentTarget.style.fill = "red";
            }
          }}
        />
        <div className="h-full border-l border-solid border-slate-300"></div>
        <div className="flex flex-1 flex-col justify-start">
          <span> 360,000원</span>
          <span> 가격 제안 불가</span>
        </div>
        <Button>채팅하기</Button>
      </footer>
    </div>
  );
}
