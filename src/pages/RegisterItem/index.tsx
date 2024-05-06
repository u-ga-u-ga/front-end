import { createFileRoute } from "@tanstack/react-router";

import { ItemRegistrationForm } from "@/widgets/forms/itemRegistrationForm";
import { RegisterItemPageHeader } from "@/widgets/headers";

export const Route = createFileRoute("/RegisterItem/")({
  component: RegisterItemPage,
});

export default function RegisterItemPage() {
  return (
    <div className="flex w-full flex-col gap-6 self-stretch  ">
      <RegisterItemPageHeader
        onClickLeftButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        onClickRightButton={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ItemRegistrationForm />
    </div>
  );
}
