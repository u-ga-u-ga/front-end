type ItemInfoProps = {
  src?: string;
  itemName: string;
  price: string | number;
  date: string;
};

export default function ItemInfo({
  src,
  itemName,
  price,
  date,
}: ItemInfoProps) {
  return (
    <div className="relative flex w-[150px] shrink-0 flex-col items-start justify-start gap-2 overflow-hidden border border-solid border-[rgba(0,0,0,0.10)] pb-2">
      <div className="relative h-[150px] shrink-0 self-stretch">
        <img
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
          src={src}
          draggable={false}
        />
      </div>
      <div className="relative flex shrink-0 flex-col items-center justify-start gap-1 self-stretch pl-2 pr-2">
        <div className="font-body4-font-family text-body4-font-size leading-body4-line-height font-body4-font-weight relative self-stretch text-left">
          {itemName}
        </div>
        <div className="relative flex shrink-0 flex-row items-center justify-between self-stretch">
          <div className="font-body2-font-family text-body2-font-size leading-body2-line-height font-body2-font-weight relative text-left">
            {price}
          </div>
          <div className="font-body4-font-family text-body4-font-size leading-body4-line-height font-body4-font-weight relative text-left text-gray-500">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}
