export function Badge({
  color = "primary",
  type = "solid",
  label = "label",
  onClick,
}: {
  color: "primary" | "gray";
  type: "outline" | "solid";
  label: string;
  onClick?: () => void;
}) {
  const backgroundColor =
    type === "solid"
      ? color === "primary"
        ? "bg-primary-dark"
        : "bg-white"
      : "[transparent]";
  const textColor =
    type === "solid"
      ? color === "primary"
        ? "text-white"
        : "text-black"
      : color === "primary"
        ? "text-primary-dark"
        : "text-gray-500";
  const borderColor =
    color === "primary" ? "border-primary-dark" : "border-gray-500";

  return (
    <div
      onClick={onClick}
      className={`box-border flex items-center justify-center rounded-full border ${backgroundColor} px-3 py-2  ${textColor} ${borderColor}`}
    >
      <div className={` border-0sans leading40%]`}>{label}</div>
    </div>
  );
}
