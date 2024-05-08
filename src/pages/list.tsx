import { createFileRoute } from "@tanstack/react-router";
import profile from "../shared/ui/svg/Profile.svg";
import bell from "../shared/ui/svg/Bell.svg";
import list from "../shared/ui/svg/List.svg";
import arrow from "../shared/ui/svg/Arrow.svg";
import chat from "../shared/ui/svg/Chat.svg";
import like from "../shared/ui/svg/Like.svg";
import plus from "../shared/ui/svg/Plus.svg";

export const Route = createFileRoute("/list")({
  component: ListComponent,
});

function ListComponent() {
  return (
    <>
      <div
        className="all relative h-[1080px] w-[619px]  
"
      >
        <div className="top absolute left-0 top-0 flex h-[111px] w-[600px] items-center justify-between  border-b border-solid border-[#0000004c] border-gray-900 px-[35px] py-0 [border-bottom-style:solid]">
          <div className="title relative w-fit whitespace-nowrap text-[35px] font-bold leading-[46.2px] tracking-[0] text-black [font-family:'Inter-Bold',Helvetica]">
            가구고고
          </div>
          <div className="icon flex h-[40px] w-[143px] space-x-7">
            <img alt="profile" src={profile} />
            <img alt="bell" src={bell} />
            <img alt="list" src={list} />
          </div>
        </div>
        <div
          className="content_controll absolute left-[35px] top-[139px] flex h-[850px] w-[530px] flex-col items-center  
"
        >
          <div className="top_location relative h-[52px]  self-stretch ">
            <div className="relative  top-[12px] inline-flex items-center gap-[6px] ">
              <div className="font-18">군자동</div>
              <img alt="Expand arrow" src={arrow} />
            </div>
          </div>

          <div className="list z-index: 10; relative mb-[-150.00px] flex h-[100%] flex-col gap-[16px] self-stretch overflow-y-scroll ">
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
                    <img
                      className="relative h-[16px] w-[16px]"
                      alt="Bx chat"
                      src={chat}
                    />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      3
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <img
                      className="relative h-[16px] w-[16px]"
                      alt="Ant design heart"
                      src={like}
                    />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300 ">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="image.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px] self-stretch">
                <div className="relative inline-flex flex-1 grow flex-col items-start gap-[4px]">
                  <div className="font-16 relative mt-[-1.00px] w-[232px] text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                    바이레도 블랑쉬 50ml
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      광진구 구의제3동
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      ·
                    </div>
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      26초 전
                    </div>
                  </div>
                  <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                    4,000원
                  </div>
                </div>
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-end gap-[4px] self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] items-center gap-[2px]">
                    <img
                      className="relative h-[16px] w-[16px]"
                      alt="Ant design heart"
                      src={like}
                    />
                    <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300 ">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="rectangle-2-2.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px]">
                <div className="font-16 relative mt-[-1.00px] self-stretch text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                  샌드위치
                </div>
                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    동대문구 휘경동
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    ·
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    끌올 59초 전
                  </div>
                </div>
                <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                  8,000원
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300 ">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="rectangle-2-3.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px]">
                <div className="font-16 relative mt-[-1.00px] self-stretch text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                  아이폰 13프로맥스
                </div>
                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    군자동
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    ·
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    1일 전
                  </div>
                </div>
                <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                  1,000,000원
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300 ">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="rectangle-2-4.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px]">
                <div className="font-16 relative mt-[-1.00px] self-stretch text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                  커피머신
                </div>
                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    구리시 교문1동
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    ·
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    1초 전
                  </div>
                </div>
                <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                  100,000원
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300 ">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="rectangle-2-5.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px]">
                <div className="font-16 relative mt-[-1.00px] self-stretch text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                  커피머신
                </div>
                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    구리시 교문1동
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    ·
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    1초 전
                  </div>
                </div>
                <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                  100,000원
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300 ">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="rectangle-2-5.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px]">
                <div className="font-16 relative mt-[-1.00px] self-stretch text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                  커피머신
                </div>
                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    구리시 교문1동
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    ·
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    1초 전
                  </div>
                </div>
                <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                  100,000원
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300 ">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="rectangle-2-5.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px]">
                <div className="font-16 relative mt-[-1.00px] self-stretch text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                  커피머신
                </div>
                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    구리시 교문1동
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    ·
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    1초 전
                  </div>
                </div>
                <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                  100,000원
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] items-start gap-[16px] self-stretch  border-b border-solid border-[#0000004c] border-gray-300 ">
              <img
                className="relative h-[110px] w-[110px]"
                alt="Rectangle"
                src="rectangle-2-5.svg"
              />
              <div className="relative flex flex-1 grow flex-col items-start gap-[4px]">
                <div className="font-16 relative mt-[-1.00px] self-stretch text-[length:var(--16-font-size)] font-[number:var(--16-font-weight)] leading-[var(--16-line-height)] tracking-[var(--16-letter-spacing)] text-black [font-style:var(--16-font-style)]">
                  커피머신
                </div>
                <div className="relative inline-flex flex-[0_0_auto] items-start gap-[4px]">
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    구리시 교문1동
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    ·
                  </div>
                  <div className="font-12 relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--12-font-size)] font-[number:var(--12-font-weight)] leading-[var(--12-line-height)] tracking-[var(--12-letter-spacing)] text-[#8c8c8c] [font-style:var(--12-font-style)]">
                    1초 전
                  </div>
                </div>
                <div className="relative w-fit whitespace-nowrap text-[15px] font-bold leading-[22px] tracking-[0] text-[#4096ed] [font-family:'Inter-Bold',Helvetica]">
                  100,000원
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[569px] top-[903px] flex h-[50px] w-[50px] items-start gap-[10px] rounded-[100px] bg-[#99ccff] p-[12px] shadow-[0px_4px_12px_#0000001f]">
          <img
            className="relative mb-[-1.00px] mr-[-1.00px] h-[27px] w-[27px]"
            alt="Plus math"
            src={plus}
          />
        </div>
      </div>
    </>
  );
}
