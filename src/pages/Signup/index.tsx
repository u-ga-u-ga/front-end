import { createFileRoute } from "@tanstack/react-router";

import { SignupForm } from "@/widgets/forms";
import { SignUpPageHeader } from "@/widgets/headers";

export const Route = createFileRoute("/Signup/")({
  component: SignupPage,
});

function SignupPage() {
  return (
    <div className="flex w-full flex-1 flex-col gap-6">
      <SignUpPageHeader
        onClickLeftButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        onClickRightButton={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="items-strech flex flex-col px-8 py-6">
        <SignupForm />
      </div>
    </div>
  );
}
