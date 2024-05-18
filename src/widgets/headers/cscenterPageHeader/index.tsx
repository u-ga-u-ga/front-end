import { useRouter } from "@tanstack/react-router";

import copyTextToClipboard from "@/shared/lib/copyTextToClipboard";
import { Button } from "@/shared/ui";
import CommonHeaderComponent_EXPERIMENTAL from "@/shared/ui/header_Experimental";
import { Share } from "@/shared/ui/icon";
import ChevronRight from "@/shared/ui/icon/chevronLeft.svg?react";

export default function CSCenterPageHeader() {
  const router = useRouter();
  return (
    <CommonHeaderComponent_EXPERIMENTAL
      title={"고객센터"}
      leftElement={
        <Button
          variant={"ghost"}
          size={"sm"}
          onClick={router.history.back}
          role="link"
        >
          <ChevronRight />
        </Button>
      }
      rightElement={
        <Button
          variant={"ghost"}
          size={"sm"}
          onClick={() => copyTextToClipboard(window.location.href)}
          role="link"
        >
          <Share />
        </Button>
      }
    />
  );
}
