import { Type3Header } from "@/shared/ui/headerProptotype/Type3Header";
import ChevronLeft from "@/shared/ui/icon/chevronLeft.svg?react";

export function NotificationPageHeader({
  onClickLeftButton,
  onClickRightButton,
}: {
  onClickLeftButton: () => void;
  onClickRightButton: () => void;
}) {
  return (
    <Type3Header
      leftButton={<ChevronLeft />}
      rightButton={"Edit"}
      onClickLeftButton={onClickLeftButton}
      onClickRightButton={onClickRightButton}
      title={"알림"}
    />
  );
}
