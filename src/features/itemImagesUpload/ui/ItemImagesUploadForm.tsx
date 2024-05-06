import { useState } from "react";

import { ImageUploadButton } from "@/shared/ui";

export function ItemImagesUploadForm({
  maxNumImages = 10,
}: {
  maxNumImages: number;
}) {
  const [imageInfos, setImageInfos] = useState<{ dataUrl: string }[]>([]);
  const numImages = imageInfos.length;

  function handleImageLoaded(dataUrl: string) {
    setImageInfos([...imageInfos, { dataUrl }]);
  }

  return (
    <div className="flex flex-row  flex-wrap gap-6 self-stretch">
      {imageInfos.map((imageInfo, index) => (
        <ImageUploadButton
          key={imageInfo.dataUrl} // must be rendered anew everytime
          onImageDeleted={() => {
            const newImageInfos = [...imageInfos];
            newImageInfos.splice(index, 1);
            setImageInfos(newImageInfos);
          }}
          onImageLoaded={() => {}}
          imageIndex={index + 1}
          totalNumImages={maxNumImages}
          defaultDataUrl={imageInfo.dataUrl}
        />
      ))}
      {numImages < maxNumImages && (
        <ImageUploadButton
          key={numImages + 1}
          onImageDeleted={() => {}}
          onImageLoaded={handleImageLoaded}
          imageIndex={numImages + 1}
          defaultDataUrl=""
          totalNumImages={10}
        />
      )}
    </div>
  );
}
