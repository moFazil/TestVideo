import React, { ChangeEvent } from "react";
import { observer } from "mobx-react";
import { ImageResource } from "../entity/ImageResource";
// import { UploadButton } from "../shared/UploadButton";
import { imagesApi } from "@/mockData/Images";
import { StoreContext } from "@/store";


export const ImageResourcesPanel: React.FC = observer(() => {
  const store = React.useContext(StoreContext);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    store.addImageResource(URL.createObjectURL(file));
  };

  const handleAddImage = (imageSrc: string) => {
    store.addImageResource(imageSrc);
  };

  const images = imagesApi;

  return (
    <div className="overflow-y-auto max-h-full hide-scrollbar">
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
        Images
      </div>
      <div>
    {images.map((image: string | { src: { original: string } }, index: number) => (
    <div key={index} className="relative inline-block">
      <ImageResource image={(typeof image === 'string') ? image : image.src.original} index={index} />
    </div>
  ))}
</div>
    </div>
  );
});
