import { forwardRef, useRef, useState } from "react";

const ImageUploadButton = forwardRef<
  HTMLDivElement,
  {
    imageIndex: number;
    totalNumImages: number;
    defaultDataUrl?: string;
    onImageLoaded: (dataUrl: string) => void;
    onImageDeleted: () => void;
  }
>(
  (
    {
      imageIndex = 1,
      totalNumImages = 10,
      defaultDataUrl = "",
      onImageLoaded = () => {},
      onImageDeleted = () => {},
    },
    ref
  ) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [dataUrl, setDataUrl] = useState<string>(defaultDataUrl);

    async function handleFileSelection() {
      const file = fileInputRef.current?.files?.[0];
      if (file) {
        const newDataUrl = await _getDataUrlAsync(file);
        setDataUrl(newDataUrl);
        onImageLoaded(newDataUrl);
      }
    }

    return (
      <>
        <div
          ref={ref}
          onClick={() => {
            if (dataUrl.length) {
              setDataUrl("");
              onImageDeleted();
            } else fileInputRef.current?.click();
          }}
          className=" relative flex h-20 w-20 cursor-pointer flex-col items-center justify-center gap-2  rounded-2xl border border-gray-200   pt-1 transition-colors duration-200 ease-in-out hover:bg-gray-100"
        >
          <_CameraIcon />
          <div className=" font-body-4  select-none font-sans  text-gray-200">
            {imageIndex}/{totalNumImages}
          </div>
          {dataUrl.length ? (
            <img
              src={dataUrl}
              alt="uploaded"
              className="absolute left-0 top-0 h-full w-full rounded-2xl object-cover"
            />
          ) : null}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileSelection}
        />
      </>
    );
  }
);

ImageUploadButton.displayName = "ImageUploadButton";
export { ImageUploadButton };

const _CameraIcon = () => (
  <svg
    width={41}
    height={35}
    viewBox="0 0 41 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5625 34.3001H24.4542C30.6988 34.3001 33.8221 34.3001 36.065 32.8995C37.0328 32.2954 37.8663 31.5158 38.518 30.6052C40.0167 28.5091 40.0167 25.5879 40.0167 19.7493C40.0167 13.9087 40.0167 10.9894 38.518 8.89331C37.8664 7.98267 37.0328 7.20309 36.065 6.59902C34.6244 5.6977 32.8197 5.37566 30.0565 5.26132C28.738 5.26132 27.6035 4.3276 27.3454 3.11758C27.1481 2.23124 26.6356 1.43695 25.8945 0.868928C25.1533 0.30091 24.229 -0.00599261 23.2777 8.8667e-05H16.739C14.7621 8.8667e-05 13.0594 1.30539 12.6713 3.11758C12.4132 4.3276 11.2787 5.26132 9.96015 5.26132C7.199 5.37566 5.39425 5.6996 3.95165 6.59902C2.98448 7.20321 2.15164 7.98279 1.50062 8.89331C0 10.9894 0 13.9087 0 19.7493C0 25.5879 0 28.5072 1.49862 30.6052C2.14689 31.5122 2.97924 32.2916 3.95165 32.8995C6.19458 34.3001 9.31788 34.3001 15.5625 34.3001ZM31.1251 11.9517C30.9081 11.95 30.6928 11.9889 30.4916 12.0664C30.2904 12.1439 30.1072 12.2584 29.9524 12.4033C29.7976 12.5482 29.6743 12.7208 29.5896 12.9111C29.5048 13.1013 29.4603 13.3057 29.4584 13.5124C29.4584 14.3737 30.2047 15.0711 31.1251 15.0711H33.3481C34.2684 15.0711 35.0168 14.3718 35.0168 13.5124C35.0149 13.3055 34.9703 13.101 34.8854 12.9106C34.8005 12.7202 34.6771 12.5476 34.5221 12.4026C34.3671 12.2577 34.1837 12.1432 33.9822 12.0659C33.7807 11.9885 33.5653 11.9497 33.3481 11.9517H31.1251ZM11.6727 19.7473C11.6727 15.4426 15.4063 11.9517 20.0082 11.9517H20.0102C24.6141 11.9517 28.3457 15.4426 28.3457 19.7492C28.3457 24.0538 24.6121 27.5429 20.0102 27.5429C15.4043 27.5429 11.6727 24.0538 11.6727 19.7473ZM15.0081 19.7473C15.0081 17.1653 17.2491 15.0711 20.0102 15.0711C22.7734 15.0711 25.0123 17.1653 25.0123 19.7473C25.0123 22.3312 22.7734 24.4254 20.0102 24.4254C17.2491 24.4254 15.0081 22.3312 15.0081 19.7473Z"
      fill="#8C8C8C"
    />
  </svg>
);

async function _getDataUrlAsync(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target?.result as string;
      image.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(image, 0, 0);
          const newDataUrl = canvas.toDataURL("image/jpeg");
          resolve(newDataUrl);
        }
        canvas.remove();
      };
    };
    try {
      reader.readAsDataURL(file);
    } catch (e) {
      reject(e);
    }
  });
}
