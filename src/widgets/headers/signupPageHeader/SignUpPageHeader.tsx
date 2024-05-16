import { Type3Header } from "@/shared/ui/headerProptotype/Type3Header";
import ChevronLeft from "@/shared/ui/icon/chevronLeft.svg?react";
import Home from "@/shared/ui/icon/home.svg?react";

export function SignUpPageHeader({
  onClickLeftButton,
  onClickRightButton,
}: {
  onClickLeftButton: () => void;
  onClickRightButton: () => void;
}) {
  return (
    <Type3Header
      title={"회원 가입"}
      leftButton={<ChevronLeft />}
      rightButton={<Home />}
      onClickLeftButton={onClickLeftButton}
      onClickRightButton={onClickRightButton}
    />
  );
}
