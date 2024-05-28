import { IconButton, Type1Header } from "@/shared/ui";
import { Hamburger, Settings } from "@/shared/ui/icon";

export function ChatListPageHeader() {
  return (
    <Type1Header
      title={"채팅"}
      RightButtons={[<SettingsButton />, <HamburgerButton />]}
    />
  );
}

function SettingsButton({ onClick = () => {} }: { onClick?: () => void }) {
  return <IconButton onClick={onClick} Icon={<Settings />} />;
}

function HamburgerButton({ onClick = () => {} }: { onClick?: () => void }) {
  return <IconButton onClick={onClick} Icon={<Hamburger />} />;
}
