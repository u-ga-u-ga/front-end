import { Checkbox } from "../checkbox";

const defaultItems = [
  { label: "Item 1", value: "item1" },
  { label: "Item 2", value: "item2" },
  { label: "Item 3", value: "item3" },
];

export function RadioButton({
  items = defaultItems,
  selectedValue,
  onChangeValue,
}: {
  items: { label: string; value: string }[];
  selectedValue?: string;
  onChangeValue: (value: string) => void;
}) {
  return (
    <div className="relative flex flex-shrink-0 items-center gap-x-12 self-stretch">
      {items.map((item) => (
        <RadioButtonChoice
          key={item.value}
          label={item.label}
          isSelected={item.value === selectedValue}
          onClick={() => {
            onChangeValue(item.value);
          }}
        />
      ))}
    </div>
  );
}

function RadioButtonChoice({
  label,
  onClick,
  isSelected,
}: {
  label: string;
  onClick: () => void;
  isSelected: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-shrink-0 items-center gap-x-1 pb-2 pl-0 pr-0 pt-2"
    >
      <Checkbox data-state={isSelected ? "checked" : ""} />
      <span className="font-body-4 relative flex-shrink-0 font-sans font-normal ">
        {label}
      </span>
    </div>
  );
}
