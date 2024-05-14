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
            <div className="relative flex w-full gap-[16px]  self-stretch  border-b border-solid border-[#0000004c] border-gray-300">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="image.svg"
              />
              <div className="relative flex flex-1 flex-col self-stretch">
                <div className="relative inline-flex flex-1  flex-col gap-[5px]">
                  <div className="font-body-3 relative ">에어팟 프로</div>
                  <div className="font-body-3 relative  inline-flex items-start gap-[4px] text-[#8c8c8c] ">
                    <div>군자동</div>
                    <div>·</div>
                    <div>3일 전</div>
                  </div>
                  <div className="font-body-3 font-bold  text-[#4096ed]">
                    220,000원
                  </div>
                </div>
                <div className="font-body-3 relative flex justify-end gap-[10px] text-[#8c8c8c]">
                  <div className="relative inline-flex items-center gap-[2px]">
                    <ChatIcon />
                    <span>3</span>
                  </div>
                  <div className="relative inline-flex items-center gap-[2px]">
                    <LikeIcon />
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="image.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px] self-stretch">
                <div className="relative inline-flex flex-1 grow flex-col items-start gap-[4px]">
                  <div className="font-16 relative mt-[-1.00px] w-[232px] text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                    에어팟 프로
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      군자동
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      ·
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3일 전
                    </div>
                  </div>
                  <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                    220,000원
                  </div>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-end gap-[4px] self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <ChatIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <LikeIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="image.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px] self-stretch">
                <div className="relative inline-flex flex-1 grow flex-col items-start gap-[4px]">
                  <div className="font-16 relative mt-[-1.00px] w-[232px] text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                    에어팟 프로
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      군자동
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      ·
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3일 전
                    </div>
                  </div>
                  <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                    220,000원
                  </div>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-end gap-[4px] self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <ChatIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <LikeIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="image.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px] self-stretch">
                <div className="relative inline-flex flex-1 grow flex-col items-start gap-[4px]">
                  <div className="font-16 relative mt-[-1.00px] w-[232px] text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                    에어팟 프로
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      군자동
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      ·
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3일 전
                    </div>
                  </div>
                  <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                    220,000원
                  </div>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-end gap-[4px] self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <ChatIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <LikeIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="image.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px] self-stretch">
                <div className="relative inline-flex flex-1 grow flex-col items-start gap-[4px]">
                  <div className="font-16 relative mt-[-1.00px] w-[232px] text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                    에어팟 프로
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      군자동
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      ·
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3일 전
                    </div>
                  </div>
                  <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                    220,000원
                  </div>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-end gap-[4px] self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <ChatIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <LikeIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="image.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px] self-stretch">
                <div className="relative inline-flex flex-1 grow flex-col items-start gap-[4px]">
                  <div className="font-16 relative mt-[-1.00px] w-[232px] text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                    에어팟 프로
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      군자동
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      ·
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3일 전
                    </div>
                  </div>
                  <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                    220,000원
                  </div>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-end gap-[4px] self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <ChatIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <LikeIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="image.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px] self-stretch">
                <div className="relative inline-flex flex-1 grow flex-col items-start gap-[4px]">
                  <div className="font-16 relative mt-[-1.00px] w-[232px] text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                    에어팟 프로
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      군자동
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      ·
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3일 전
                    </div>
                  </div>
                  <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                    220,000원
                  </div>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-end gap-[4px] self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <ChatIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <LikeIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="image.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px] self-stretch">
                <div className="relative inline-flex flex-1 grow flex-col items-start gap-[4px]">
                  <div className="font-16 relative mt-[-1.00px] w-[232px] text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                    에어팟 프로
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      군자동
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      ·
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3일 전
                    </div>
                  </div>
                  <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                    220,000원
                  </div>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-end gap-[4px] self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <ChatIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <LikeIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="image.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px] self-stretch">
                <div className="relative inline-flex flex-1 grow flex-col items-start gap-[4px]">
                  <div className="font-16 relative mt-[-1.00px] w-[232px] text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                    에어팟 프로
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      군자동
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      ·
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3일 전
                    </div>
                  </div>
                  <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                    220,000원
                  </div>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-end gap-[4px] self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <ChatIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <LikeIcon />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[85%] top-[90%] flex h-[50px] w-[50px] items-start gap-[10px] rounded-[100px] bg-[#99ccff] p-[12px] shadow-[0px_4px_12px_#0000001f]">
          <PlusIcon />
        </div>
      </div>
    </>
  );
}
