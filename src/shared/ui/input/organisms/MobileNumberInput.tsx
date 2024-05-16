import { Button } from "../../button";
import { Input } from "../atoms/Input";

export function MobileNumberInput({
  label = "휴대폰 번호",
  mobileNumberValue,
  authNumberValue,
  onChangeMobileNumber,
  onChangeAuthNumber,
  isRequired = false,
  ...props
}: {
  label: string;
  mobileNumberValue: string;
  authNumberValue: string;
  onChangeMobileNumber: (newValue: string) => void;
  onChangeAuthNumber: (newValue: number) => void;
  isRequired?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <div className="flex items-center">
        <label className="font-body-2 font-sans text-black">{label}</label>
        {isRequired && (
          <span className="font-body-2 font-sans text-destructive">*</span>
        )}
      </div>
      <Input
        placeholder={"휴대폰 번호"}
        type={"tel"}
        value={mobileNumberValue}
        onChange={(e) => onChangeMobileNumber(e.target.value)}
        {...props}
      />
      <div className="flex items-center gap-2 self-stretch      ">
        <Input
          className="flex-1"
          placeholder={"인증 번호"}
          type={"number"}
          value={authNumberValue}
          onChange={(e) => onChangeAuthNumber(Number(e.target.value))}
          {...props}
        />
        <Button className="w-36">{"인증하기"}</Button>
      </div>
    </div>
  );
}
