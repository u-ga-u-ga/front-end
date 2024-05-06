import { CrossIcon } from "@/shared/ui";

export function RegisterItemPageHeader({
  onClickLeftButton,
  onClickRightButton,
}: {
  onClickLeftButton: () => void;
  onClickRightButton: () => void;
}) {
  return (
    <div className="relative flex  h-[6.875rem] items-center justify-between self-stretch px-8 py-0">
      <div
        className="flex h-10 w-10 items-center justify-center gap-4"
        onClick={onClickLeftButton}
      >
        <CrossIcon />
      </div>

      <div className="absolute left-1/2 top-1/2 box-content flex  translate-x-[-50%] translate-y-[-50%] items-center justify-center gap-2.5 overflow-visible text-center font-['Inter'] text-[2.1875rem] font-bold leading-[132%] text-black">
        <span>내 가구 팔기</span>
      </div>

      <div
        className="text-1  flex h-10  items-center justify-end gap-2.5 font-['Inter'] text-xl leading-[132%] text-[#8c8c8c]"
        onClick={onClickRightButton}
      >
        임시저장
      </div>
    </div>
  );
}
