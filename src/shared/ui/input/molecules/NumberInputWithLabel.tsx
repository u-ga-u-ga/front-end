import { Input } from "../atoms/Input";

export function NumberInputWithLabel({
  label = "label",
  value,
  placeholder = "placeholder",
  onChangeValue,
  ...props
}: {
  label: string;
  value: number;
  placeholder?: string;
  onChangeValue: (newValue: number) => void;
}) {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <label className="font-body-2 font-sans text-black">{label}</label>
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
