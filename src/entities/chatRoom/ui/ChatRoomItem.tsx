import React from "react";

export function ChatroomItem({
  sellerNickname = "판매자닉네임",
  sellerWhereabout = "판매자지역",
  imageSrc = "https://dummyimage.com/72x72/000/fff.png",
  lastChatAt = "어제",
  lastChatContent = "마지막 대화 내용이 여기 들어갑니다",
}: {
  sellerNickname: string;
  sellerWhereabout: string;
  imageSrc: string;
  lastChatAt: string;
  lastChatContent: string;
}) {
  return (
    <div className="relative flex flex-shrink-0 items-start gap-x-4 self-stretch">
      <img
        className="size-18 relative flex-shrink-0 rounded-[43px] bg-[rgba(217,_217,_217,_1)]"
        src={imageSrc}
      />
      <div className="relative flex flex-1 flex-shrink-0 flex-col items-start justify-center gap-y-2.5 self-stretch">
        <div className="relative flex flex-shrink-0 items-center gap-x-2.5 self-stretch">
          <span className='relative flex-shrink-0 text-left font-["Inter"] text-base font-bold leading-[22.399999618530273px] text-[rgba(0,_0,_0,_1)]'>
            {sellerNickname}
          </span>
          <div className="relative flex flex-shrink-0 items-center gap-x-1">
            <span className='relative flex-shrink-0 text-left font-["Inter"] text-[13px] font-normal leading-[16.899999380111694px] text-[rgba(140,_140,_140,_1)]'>
              {sellerWhereabout}
            </span>
            <span className='relative flex-shrink-0 text-left font-["Inter"] text-[13px] font-normal leading-[16.899999380111694px] text-[rgba(140,_140,_140,_1)]'>
              •
            </span>
            <span className='relative flex-shrink-0 text-left font-["Inter"] text-[13px] font-normal leading-[16.899999380111694px] text-[rgba(140,_140,_140,_1)]'>
              {lastChatAt}
            </span>
          </div>
        </div>
        <div className="relative flex flex-shrink-0 items-center gap-x-2.5 self-stretch">
          <span className='relative flex-shrink flex-grow basis-0 text-left font-["Inter"] text-[13px] font-normal leading-[16.899999380111694px] text-[rgba(0,_0,_0,_1)]'>
            {lastChatContent}
          </span>
        </div>
      </div>
    </div>
  );
}
