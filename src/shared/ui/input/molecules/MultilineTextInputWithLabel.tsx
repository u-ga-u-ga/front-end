export function MultilineTextInputWithLabel({
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
