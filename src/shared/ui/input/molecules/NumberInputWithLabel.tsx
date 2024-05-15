import { Input } from "../atoms/Input";

export function NumberInputWithLabel({
  label = "label",
  value,
  placeholder = "placeholder",
  onChangeValue,
  isRequired = false,
  ...props
}: {
  label: string;
  value: number;
  placeholder?: string;
  onChangeValue: (newValue: number) => void;
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
        placeholder={placeholder}
        type={"number"}
        value={value}
        onChange={(e) => onChangeValue(Number(e.target.value))}
        {...props}
      />
    </div>
  );
}
