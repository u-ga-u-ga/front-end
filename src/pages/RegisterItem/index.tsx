import { ItemRegistrationForm } from "@/widgets/forms/itemRegistrationForm";
import { RegisterItemPageHeader } from "@/widgets/headers";

export default function RegisterItemPage() {
  return (
    <div className="flex h-full w-full flex-col gap-6 self-stretch  ">
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
