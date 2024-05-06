import { ItemImagesUploadForm } from "@/features/itemImagesUpload";
import {
  Input,
  MultilineTextInputWithLabel,
  NumberInputWithLabel,
  SingleChoice,
  StringInputWithLabel,
} from "@/shared/ui";

export function ItemRegistrationForm() {
  return (
    <div className=" flex flex-col gap-9 self-stretch px-8">
      <ItemImagesUploadForm maxNumImages={10} />
      <StringInputWithLabel
        label={"제목"}
        value={""}
        placeholder={"제목을 입력해주세요"}
        onChangeValue={function (newValue: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="flex-0 flex flex-col gap-4 self-stretch">
        <SingleChoice
          title={"거래 방식"}
          color={"primary"}
          choices={[
            { label: "판매하기", value: "판매하기" },
            { label: "나눔하기", value: "나눔하기" },
          ]}
          selectedValue={null}
          onChangeValue={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Input value={undefined} placeholder={"거래 가격을 입력해주세요"} />
      </div>

      <MultilineTextInputWithLabel
        label={"자세한 설명"}
        value={""}
        onChangeValue={function (newValue: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <StringInputWithLabel
        label={"거래 희망 장소"}
        value={""}
        placeholder={"장소 입력"}
        onChangeValue={function (newValue: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
