import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { detailQueryOptions } from "@/entities/detail/api/detailQueryOptions";
import useMouseSnapSlide from "@/shared/lib/useMouseSnapSlide";
import { Button } from "@/shared/ui/button";
import ChevronRight from "@/shared/ui/icon/chevronLeft.svg?react";
import DefaultProfile from "@/shared/ui/icon/defaultProfile.svg?react";
import Heart from "@/shared/ui/icon/heart.svg?react";
import ItemInfo from "@/shared/ui/itemInfo";
import DetailPageHeader from "@/widgets/headers/detailPageHeader";
import ImageSlider from "@/widgets/ImageSlider";

export const Route = createFileRoute("/detail")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(detailQueryOptions()),
  component: DetailComponent,
});

const _tempSameCategoryImages_WILL_BE_REMOVED_AFTER_API_READY = Array(6).fill({
  src: "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_1280.jpg",
  itemName: "아크릴체어",
  price: 30000,
  date: "3일 전",
});

function DetailComponent() {
  const { callbacks } = useMouseSnapSlide({ speed: 1 });
  const { data } = useSuspenseQuery(detailQueryOptions());
  return (
    <div className="relative h-full w-full overflow-scroll scrollbar-hide">
      <DetailPageHeader />
      <main className="absolute top-0 h-full w-full">
        <ImageSlider
          srcList={Array(10).fill(
            "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_1280.jpg"
          )}
        />
        <div className="min-h-[calc(100%-400px) mb-16 [&>div]:p-4">
          <div className="flex items-center justify-start gap-2 ">
            <DefaultProfile height={30} width={30} className="text-gray-200" />
            <div className="flex flex-col text-sm">
              <span className="font-bold">{data.userName}</span>
              <span>{data.addr}</span>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-3 ">
            <h1 className="font-bold">{data.title}</h1>
            <div className="flex gap-2 text-sm text-slate-400">
              <span>{data.category}</span>
              <span>{data.date}</span>
            </div>
            <pre>{data.content}</pre>
          </div>
          <hr />
          <div>
            <div className="flex items-center justify-between">
              <h2>거래 희망 장소</h2>
              <ChevronRight transform="rotate(180)" width={16} height={16} />
            </div>
            <div className="mt-4 h-24 rounded-sm bg-slate-300"></div>
          </div>
          <hr />
          <div>
            <div className="relative flex shrink-0 flex-row items-center justify-between self-stretch">
              <h2 className="font-body2-font-family text-body2-font-size leading-body2-line-height font-body2-font-weight relative flex-1 text-left">
                {data.category}를 찾으시나요?
              </h2>
              <ChevronRight transform="rotate(180)" width={16} height={16} />
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
          <div className="h-36"></div>
        </div>
      </main>
      <footer className="fixed bottom-0 flex h-16 w-[600px] items-center justify-between gap-3 border-t border-solid border-slate-300 bg-white p-2">
        <Heart
          className="stroke-gray-500 text-transparent"
          onClick={(e) => {
            const { currentTarget } = e;
            if (currentTarget.style.color) {
              currentTarget.style.removeProperty("color");
            } else {
              currentTarget.style.color = "red";
            }
          }}
        />
        <div className="h-full border-l border-solid border-slate-300"></div>
        <div className="flex flex-1 flex-col justify-start">
          <span>{data.price.toLocaleString()}원</span>
          <span>{data.canBeDeal ? "가격 제안 가능" : "가격 제안 불가"}</span>
        </div>
        <Button>채팅하기</Button>
      </footer>
    </div>
  );
}
