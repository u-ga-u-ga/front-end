import { Input } from "../atoms/Input";

export function AddressInput({
  label = "주소",
  addressLine1Value,
  addressLine2Value,
  onStartAddressSearch,
  onChangeAddressLine2,
  isRequired = false,
  ...props
}: {
  label: string;
  addressLine1Value: string;
  addressLine2Value: string;
  onStartAddressSearch: () => void;
  onChangeAddressLine2: (newValue: string) => void;
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
        placeholder={"눌러서 주소 검색"}
        onClick={onStartAddressSearch}
        type={"string"}
        value={addressLine1Value}
        {...props}
      />
      <Input
        placeholder={"상세 주소"}
        type={"string"}
        value={addressLine2Value}
        onChange={(e) => onChangeAddressLine2(e.target.value)}
        {...props}
      />
    </div>
  );
}
