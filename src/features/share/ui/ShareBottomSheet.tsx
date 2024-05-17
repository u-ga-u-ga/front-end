import { Button } from "@/shared/ui";
import { Drawer, DrawerContent, DrawerTrigger } from "@/shared/ui/drawer";
import { Copy } from "@/shared/ui/icon";
import { Separator } from "@/shared/ui/separator";

function ShareBottomSheetCotent() {
  return (
    <div className="flex  w-full  flex-col gap-4  p-6">
      <div className="flex flex-row gap-4  self-stretch">
        <img
          src={"a.jpg"}
          alt={"itemImage"}
          className="size-16 rounded-md bg-gray-100"
        />
        <div className="font-body-2 line-clamp-2 flex-1 self-center">
          {"ㄴ이ㅏ러ㅣ나ㅓ 님얼 ㅣㅁ나어리 ㅁ너일 최대 두줄까지만 보여줍니다."}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-200">
          <Copy />
        </div>
      </div>
      <Separator />
      <div className="flex flex-row gap-6">
        <WhereToShare />
        <WhereToShare />
        <WhereToShare />
      </div>
    </div>
  );
}

export function ShareBottomSheet() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Share</Button>
      </DrawerTrigger>
      <DrawerContent>
        <ShareBottomSheetCotent />
      </DrawerContent>
    </Drawer>
  );
}

function WhereToShare() {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <div className="flex items-center justify-center gap-2.5 self-stretch px-2 py-0">
        <img
          src={""}
          alt="shareTarget"
          className="flex h-12 w-12 flex-col items-center justify-center gap-2.5 rounded-2xl bg-gray-200 px-3 py-0"
        ></img>
      </div>
      <div className="frame_130 text flex items-center justify-center gap-2.5 self-stretch overflow-hidden text-center font-['Inter'] text-[.8125rem] leading-[130%] text-black">
        Quick Share
      </div>
    </div>
  );
}
