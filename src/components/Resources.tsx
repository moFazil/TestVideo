"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { ExportVideoPanel } from "./panels/ExportVideoPanel";
import { AnimationsPanel } from "./panels/AnimationsPanel";
import { AudioResourcesPanel } from "./panels/AudioResourcesPanel";
import { FillPanel } from "./panels/FillPanel";
import { ImageResourcesPanel } from "./panels/ImageResourcesPanel";
import { TextResourcesPanel } from "./panels/TextResourcesPanel";
import { VideoResourcesPanel } from "./panels/VideoResourcesPanel";
import { EffectsPanel } from "./panels/EffectsPanel";
import { ShapesPanel } from "./panels/ShapesPanel";
import { UploadPanel } from "./panels/UploadPanel";

export const Resources = observer(() => {
  const store = React.useContext(StoreContext);
  const selectedMenuOption = store.selectedMenuOption;
  return (
    <div className=" w-72">
      {selectedMenuOption === "Video" ? <VideoResourcesPanel/> : null}
      {selectedMenuOption === "Audio" ? <AudioResourcesPanel /> : null}
      {selectedMenuOption === "Image" ? <ImageResourcesPanel /> : null}
      {selectedMenuOption === "Text" ? <TextResourcesPanel /> : null}
      {selectedMenuOption === "Shapes"? <ShapesPanel/> : null}
      {selectedMenuOption === "Animation" ? <AnimationsPanel /> : null}
      {selectedMenuOption === "Effect" ? <EffectsPanel /> : null}
      {selectedMenuOption === "Export" ? <ExportVideoPanel /> : null}
      {selectedMenuOption === "Fill" ? <FillPanel /> : null}
      {selectedMenuOption === "Upload" ? <UploadPanel /> : null}
    </div>
  );
});
