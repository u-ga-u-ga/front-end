import { Checkbox } from "../checkbox";

export function RadioToggle({
  label,
  isChecked,
  onClick,
}: {
  isChecked?: boolean;
  label: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-shrink-0 items-center gap-x-1 pb-2 pl-0 pr-0 pt-2"
    >
      <Checkbox data-state={isChecked ? "checked" : ""} />
      <span className="font-body-4 relative flex-shrink-0 font-sans font-normal ">
        {label}
      </span>
    </div>
  );
}
