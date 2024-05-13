import { Badge } from "../../badge";

export function SingleChoice({
  title = "empty string make this disappear",
  choices = [
    { label: "label1", value: "value1" },
    { label: "label2", value: "value2" },
  ],
  color = "primary",
  selectedValue = null,
  onChangeValue = () => {},
}: {
  title: string;
  color: "primary" | "gray";
  choices: { label: string; value: string }[];
  selectedValue: string | null;
  onChangeValue: (value: string) => void;
}) {
  return (
    <div className="flex flex-col">
      {title ? (
        <div className="font-sans text-[1.0625rem] font-bold leading-[132%]  text-black">
          {title}
        </div>
      ) : null}
      <div className="mt-2 flex gap-2">
        {choices.map((choice) => (
          <Badge
            key={choice.value}
            color={color}
            label={choice.label || choice.value}
            type={selectedValue === choice.value ? "solid" : "outline"}
            onClick={() => onChangeValue(choice.value)}
          />
        ))}
      </div>
    </div>
  );
}
