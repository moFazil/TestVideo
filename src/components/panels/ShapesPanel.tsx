import React, { ChangeEvent } from "react";
import { observer } from "mobx-react";
import { shapesApi } from "@/mockData/Shapes";
import { StoreContext } from "@/store";
import { ShapesResource } from "../entity/ShapesResources";


export const ShapesPanel: React.FC = observer(() => {
  const store = React.useContext(StoreContext);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    store.addImageResource(URL.createObjectURL(file));
  };

  const handleAddImage = (imageSrc: string) => {
    store.addImageResource(imageSrc);
  };

  const shapes = shapesApi;

  return (
    <div className="overflow-y-auto max-h-full hide-scrollbar">
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
        Shapes
      </div>
      <div>
    {shapes.map((image: string | { src: { original: string } }, index: number) => (
    <div key={index} className="relative inline-block">
      <ShapesResource image={(typeof image === 'string') ? image : image.src.original} index={index} />
    </div>
  ))}
</div>
    </div>
  );
});
