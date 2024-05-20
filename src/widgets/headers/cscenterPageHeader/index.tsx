import { useRouter } from "@tanstack/react-router";

import copyTextToClipboard from "@/shared/lib/copyTextToClipboard";
import { Button } from "@/shared/ui";
import { Type3Header } from "@/shared/ui/headerProptotype/Type3Header";
import { Share } from "@/shared/ui/icon";
import ChevronRight from "@/shared/ui/icon/chevronLeft.svg?react";

export default function CSCenterPageHeader() {
  const router = useRouter();
  return (
    <Type3Header
      title="고객센터"
      leftButton={
        <Button variant={"ghost"} size={"sm"} role="link">
          <ChevronRight />
        </Button>
      }
      onClickLeftButton={router.history.back}
      rightButton={
        <Button variant={"ghost"} size={"sm"} role="link">
          <Share />
        </Button>
      }
      onClickRightButton={() => copyTextToClipboard(window.location.href)}
    />
  );
}
