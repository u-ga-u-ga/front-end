export function MultilineTextInputWithLabel({
  label = "label",
  value,
  placeholder = "placeholder",
  onChangeValue,
  isRequired = false,
  ...props
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChangeValue: (newValue: string) => void;
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
      <textarea
        className="flex h-56 items-center gap-2.5 self-stretch rounded border border-gray-200 p-4 font-sans leading-[140%] text-gray-950 "
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        {...props}
      />
    </div>
  );
}
