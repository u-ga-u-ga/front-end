import { createFileRoute } from "@tanstack/react-router";

import ProfileIcon from "@/shared/ui/icon/profile.svg?react";
import BellIcon from "@/shared/ui/icon/bell.svg?react";
import ListIcon from "@/shared/ui/icon/list.svg?react";
import ArrowIcon from "@/shared/ui/icon/arrow.svg?react";
import ChatIcon from "@/shared/ui/icon/chat.svg?react";
import LikeIcon from "@/shared/ui/icon/like.svg?react";
import PlusIcon from "@/shared/ui/icon/plus.svg?react";

export const Route = createFileRoute("/list")({
  component: ListComponent,
});

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  location: string;
  date: string;
  price: number;
  chatCount: number;
  likeCount: number;
}

const products: Product[] = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  name: "에어팟 프로",
  imageUrl: "image.svg",
  location: "군자동",
  date: "3일 전",
  price: 220000,
  chatCount: 3,
  likeCount: 2,
}));
function ListComponent() {
  return (
    <>
      <div
        className="all relative h-[100%] w-[619px]  
"
      >
        <div className="top absolute left-0 top-0 flex h-[100px] w-[600px] items-center justify-between  border-b  border-gray-900 px-[35px] ">
          <div className="title font-header-1 relative">가구고고</div>
          <div className="icon flex h-[40px] w-[143px] items-center  justify-between">
            <ProfileIcon />
            <BellIcon />
            <ListIcon />
          </div>
        </div>
        <div
          className="content_controll absolute left-[35px] top-[139px] flex h-[80%] w-[530px] flex-col items-center
"
        >
          <div className="top_location relative mb-2 h-[52px] self-stretch">
            <div className="relative  top-[12px] inline-flex items-center gap-[6px] ">
              <div className="font-body-2">군자동</div>
              <ArrowIcon />
            </div>
          </div>

          <div className="list relative mb-[-150.00px] flex h-[93%] flex-col gap-[16px] self-stretch overflow-y-scroll scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative flex w-full gap-[16px]  self-stretch  border-b border-solid border-[#0000004c] border-gray-300"
              >
                <img
                  className="relative h-[110px] w-[110px]"
                  alt="Rectangle"
                  src={product.imageUrl}
                />
                <div className="relative flex flex-1 flex-col self-stretch">
                  <div className="relative inline-flex flex-1  flex-col gap-[5px]">
                    <div className="font-body-3 relative ">{product.name}</div>
                    <div className="font-body-3 relative  inline-flex items-start gap-[4px] text-[#8c8c8c] ">
                      <div>{product.location}</div>
                      <div>·</div>
                      <div>{product.date}</div>
                    </div>
                    <div className="font-body-3 font-bold  text-[#4096ed]">
                      {product.price}
                    </div>
                  </div>
                  <div className="font-body-3 relative flex justify-end gap-[10px] text-[#8c8c8c]">
                    <div className="relative inline-flex items-center gap-[2px]">
                      <ChatIcon />
                      <span>{product.chatCount}</span>
                    </div>
                    <div className="relative inline-flex items-center gap-[2px]">
                      <LikeIcon />
                      <span>{product.likeCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-[85%] top-[90%]  h-[50px] w-[50px] gap-[10px] rounded-[100px] bg-[#99ccff] p-[12px] shadow-[0px_4px_12px_#0000001f]">
          <PlusIcon />
        </div>
      </div>
    </>
  );
}
