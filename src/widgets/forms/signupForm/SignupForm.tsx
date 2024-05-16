import { Button, StringInputWithLabel } from "@/shared/ui";
import { AddressInput, MobileNumberInput } from "@/shared/ui/input";

export function SignupForm() {
  return (
    <div className="flex w-full flex-col items-stretch gap-9">
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
  );
}
