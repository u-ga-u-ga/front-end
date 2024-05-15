import { Button, StringInputWithLabel } from "@/shared/ui";
import { AddressInput } from "@/shared/ui/input/organisms/AddressInput";
import { MobileNumberInput } from "@/shared/ui/input/organisms/MobileNumberInput";
import { SignUpPageHeader } from "@/widgets/headers/signupPageHeader";

export default function SignupPage() {
  return (
    <div className="flex w-full flex-1 flex-col ">
      <SignUpPageHeader
        onClickLeftButton={function (): void {
          throw new Error("Function not implemented.");
        }}
        onClickRightButton={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="flex flex-col gap-9 px-8 py-6">
        <StringInputWithLabel
          label={"닉네임"}
          value={""}
          onChangeValue={function (newValue: string): void {
            throw new Error("Function not implemented.");
          }}
          isRequired={true}
        />
        <AddressInput
          label={"주소"}
          addressLine1Value={""}
          addressLine2Value={""}
          onChangeAddressLine1={function (newValue: string): void {
            throw new Error("Function not implemented.");
          }}
          onChangeAddressLine2={function (newValue: string): void {
            throw new Error("Function not implemented.");
          }}
          isRequired={true}
        />
        <MobileNumberInput
          label={"휴대폰 번호"}
          isRequired={true}
          mobileNumberValue={""}
          authNumberValue={""}
          onChangeMobileNumber={function (newValue: string): void {
            throw new Error("Function not implemented.");
          }}
          onChangeAuthNumber={function (newValue: number): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Button disabled={true}>가입 완료</Button>
      </div>
    </div>
  );
}
