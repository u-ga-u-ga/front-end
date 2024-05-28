import { useEffect, useState } from "react";
import { z } from "zod";

import { Button, StringInputWithLabel } from "@/shared/ui";
import { RadioToggle } from "@/shared/ui/radioToggle/radioToggle";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(8);

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (
      emailSchema.safeParse(email).success &&
      passwordSchema.safeParse(password).success
    ) {
      setIsDisabled(false);
    }
  }, [email, password]);

  function submitLogin() {
    console.log("submit login");
  }

  return (
    <div className="flex w-full flex-col items-stretch gap-9">
      <StringInputWithLabel
        label={"이메일"}
        value={email}
        placeholder="이메일을 입력해주세요"
        onChangeValue={() => {
          setEmail(email);
        }}
        isRequired={true}
      />
      <StringInputWithLabel
        label={"비밀번호"}
        value={password}
        placeholder="8자 이상의 비밀번호를 입력해주세요"
        onChangeValue={() => {
          setPassword(password);
        }}
        isPassword={true}
        isRequired={true}
      />
      <RadioToggle
        label={"자동 로그인"}
        isChecked={false}
        onClick={() => {
          setIsAutoLogin(!isAutoLogin);
        }}
      />
      <Button disabled={true} onClick={submitLogin}>
        가입 완료
      </Button>
    </div>
  );
}
