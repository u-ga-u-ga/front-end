import { Input } from "../atoms/Input";

export function StringInputWithLabel({
  label = "label",
  value,
  placeholder = "placeholder",
  onChangeValue,
  ...props
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChangeValue: (newValue: string) => void;
}) {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <label className="font-sans text-[1.0625rem] font-bold leading-[132%] text-black">
        {label}
      </label>
      <Input
        placeholder={placeholder}
        type={"string"}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        {...props}
      />
    </div>
  );
}
