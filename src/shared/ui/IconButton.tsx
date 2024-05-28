export function IconButton({
  Icon,
  onClick,
}: {
  Icon: React.ReactElement;
  onClick?: () => void;
}) {
  return (
    <button
      className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center gap-x-4"
      onClick={onClick}
    >
      {Icon}
    </button>
  );
}
