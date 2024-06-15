import { Button } from "../../button";
import { Input } from "../atoms/Input";

export function MobileNumberInput({
  label = "휴대폰 번호",
  mobileNumberValue,
  authNumberValue,
  onChangeMobileNumber,
  onChangeAuthNumber,
  onSecretCodeRequest,
  onAuthorizationRequest,
  hasRequestedSecretCode = false,
  isAuthorized = false,
  isRequired = false,
  ...props
}: {
  label: string;
  mobileNumberValue: string;
  authNumberValue: number | undefined;
  onChangeMobileNumber: (newValue: string) => void;
  onChangeAuthNumber: (newValue: number) => void;
  onSecretCodeRequest: () => void;
  onAuthorizationRequest: () => void;
  isAuthorized: boolean;
  hasRequestedSecretCode: boolean;
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
        {isAuthorized ? (
          <Button className="w-36" disabled>
            {"(인증 패스)"} // TODO 임시 상태
          </Button>
        ) : hasRequestedSecretCode ? (
          <Button className="w-36" onClick={onAuthorizationRequest}>
            {"인증 하기"}
          </Button>
        ) : (
          <Button className="w-36" onClick={onSecretCodeRequest}>
            {"인증 번호 받기"}
          </Button>
        )}
      </div>
    </div>
  );
}
