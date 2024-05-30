import { createFileRoute } from "@tanstack/react-router";

import { EmailSignupForm } from "@/widgets/forms";
import { SignUpPageHeader } from "@/widgets/headers";

export const Route = createFileRoute("/EmailSignup/")({
  component: EmailSignupPage,
});

function EmailSignupPage() {
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
        <EmailSignupForm />
      </div>
    </div>
  );
}
