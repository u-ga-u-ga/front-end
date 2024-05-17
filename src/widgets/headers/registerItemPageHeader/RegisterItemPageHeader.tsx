import { CrossIcon } from "@/shared/ui";
import { Type3Header } from "@/shared/ui/headerProptotype/Type3Header";

export function RegisterItemPageHeader({
  onClickLeftButton,
  onClickRightButton,
}: {
  onClickLeftButton: () => void;
  onClickRightButton: () => void;
}) {
  return (
    <Type3Header
      leftButton={<CrossIcon />}
      rightButton={<span className="text-gray-500">{"임시 저장"}</span>}
      onClickLeftButton={onClickLeftButton}
      onClickRightButton={onClickRightButton}
      title={"내 가구 팔기"}
    />
  );
}
