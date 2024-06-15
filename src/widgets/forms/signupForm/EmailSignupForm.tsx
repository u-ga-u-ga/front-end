import { useState } from "react";
import {
  Address as DaumAddress,
  useDaumPostcodePopup,
} from "react-daum-postcode";
import axios from "axios";
import { z } from "zod";

import {
  AddressInput,
  Button,
  MobileNumberInput,
  StringInputWithLabel,
} from "@/shared/ui";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(8);

export function EmailSignupForm() {
  const openDaumPostSearch = useDaumPostcodePopup();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPassowordRepeat] = useState("");
  const [name, setName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [authNumber, setAuthNumber] = useState<number | undefined>();
  const [hasRequestedSecretCode, setHasRequestedSecretCode] = useState(false);
  // const [isMobileAuthorized, setIsMobileAuthorized] = useState(true);
  const isMobileAuthorized = true; // 임시로 true로 설정
  const [zipCode, setZipCode] = useState("");

  const isFormValid =
    emailSchema.safeParse(email).success &&
    passwordSchema.safeParse(password).success &&
    passwordSchema.safeParse(passwordRepeat).success &&
    password === passwordRepeat &&
    name !== "" &&
    isMobileAuthorized;

  function onAddressSearchComplete(data: DaumAddress) {
    setAddressLine1(data.address);
    setZipCode(data.zonecode);
  }

  async function onMobileAuthorizationRequest() {}

  async function onMobileSecretCodeRequest() {
    // call api here
    // send secret code request to the server

    // if success,
    setHasRequestedSecretCode(true);
  }

  function validateInputForm() {
    if (!emailSchema.safeParse(email).success) {
      alert("이메일 형식이 올바르지 않습니다.");
      return false;
    }
    if (!passwordSchema.safeParse(password).success) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return false;
    }
    if (password !== passwordRepeat) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }
    if (name === "") {
      alert("이름을 입력해주세요.");
      return false;
    }
    if (!isMobileAuthorized) {
      alert("휴대폰 번호 인증을 완료해주세요.");
      return false;
    }
    return true;
  }

  async function onSubmitSignupAsync() {
    const isValid = validateInputForm();
    if (!isValid) return;

    try {
      axios.request({
        baseURL: "http://localhost:8080",
        url: "/user/sign_up",
        method: "POST",
        data: {
          name,
          email,
          password,
          zip_code: zipCode,
          address: `${addressLine1} ${addressLine2}`,
          phone_number: mobileNumber,
        },
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="flex w-full flex-col items-stretch gap-9">
      <StringInputWithLabel
        label={"이메일"}
        placeholder="이메일을 입력해주세요"
        value={email}
        onChangeValue={setEmail}
        isRequired={true}
        isError={!!email.length && !emailSchema.safeParse(email).success}
        errorMessage={"이메일 형식이 올바르지 않습니다."}
      />
      <StringInputWithLabel
        label={"비밀번호"}
        placeholder="8자 이상의 비밀번호를 입력해주세요"
        value={password}
        onChangeValue={setPassword}
        isPassword={true}
        isRequired={true}
        isError={
          !!password.length && !passwordSchema.safeParse(password).success
        }
        errorMessage={"비밀번호는 8자 이상이어야 합니다."}
      />
      <StringInputWithLabel
        label={"비밀번호 확인"}
        placeholder="비밀번호를 한 번 더 입력해주세요"
        value={passwordRepeat}
        onChangeValue={setPassowordRepeat}
        isPassword={true}
        isRequired={true}
        isError={!!passwordRepeat.length && password !== passwordRepeat}
        errorMessage={"비밀번호가 일치하지 않습니다."}
      />
      <StringInputWithLabel
        label={"이름"}
        placeholder="이름을 입력해주세요"
        value={name}
        onChangeValue={setName}
        isRequired={true}
      />
      <MobileNumberInput
        label={"휴대폰 번호"}
        isRequired={true}
        mobileNumberValue={mobileNumber}
        authNumberValue={authNumber}
        onChangeMobileNumber={setMobileNumber}
        onChangeAuthNumber={setAuthNumber}
        onSecretCodeRequest={onMobileSecretCodeRequest}
        onAuthorizationRequest={onMobileAuthorizationRequest}
        hasRequestedSecretCode={hasRequestedSecretCode}
        isAuthorized={isMobileAuthorized}
      />
      <AddressInput
        label={"주소"}
        addressLine1Value={addressLine1}
        addressLine2Value={addressLine2}
        onStartAddressSearch={() => {
          openDaumPostSearch({ onComplete: onAddressSearchComplete });
        }}
        onChangeAddressLine2={setAddressLine2}
        isRequired={true}
      />
      <Button disabled={!isFormValid} onClick={onSubmitSignupAsync}>
        가입 신청
      </Button>
    </div>
  );
}
