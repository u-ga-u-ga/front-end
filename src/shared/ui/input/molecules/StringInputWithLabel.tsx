import { Input } from "../atoms/Input";

export function StringInputWithLabel({
  label = "label",
  value,
  placeholder = "placeholder",
  onChangeValue,
  isRequired = false,
  isPassword = false,
  ...props
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChangeValue: (newValue: string) => void;
  isRequired?: boolean;
  isPassword?: boolean;
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
        type={isPassword ? "password" : "text"}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        {...props}
      />
    </div>
  );
}
