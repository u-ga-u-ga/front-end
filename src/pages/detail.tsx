import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, Heart, HomeIcon, Share } from "lucide-react";

import { Button } from "@/shared/ui/button";
import ImageSlider from "@/widgets/ImageSlider";

export const Route = createFileRoute("/detail")({
  component: DetailComponent,
});

function DetailComponent() {
  return (
    <div className="relative h-full w-full">
      <header className="absolute top-0 z-10 flex w-full justify-between p-4">
        <div className="flex gap-4">
          <ChevronLeft stroke="white" />
          <HomeIcon stroke="white" />
        </div>
        <Share stroke="white" />
      </header>
      <main className="scrollbar-hide h-full w-full overflow-scroll">
        <ImageSlider
          srcList={Array(10).fill(
            "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_1280.jpg",
          )}
        />
        <div className="h-[2000px] bg-pink-50">매우 긴 스크롤</div>
      </main>
      <footer className="absolute bottom-0 flex w-full items-center justify-between gap-3 p-2">
        <Heart className="text-slate-500" />
        <div className="flex flex-1 flex-col justify-start">
          <span> 360,000원</span>
          <span> 가격 제안 불가</span>
        </div>
        <Button>채팅하기</Button>
      </footer>
    </div>
  );
}
