import React, { ChangeEvent } from "react";
import { observer } from "mobx-react";
import { VideoResource } from "../entity/VideoResource";
// import { UploadButton } from "../shared/UploadButton";
import { StoreContext } from "@/store";
import { videosApi } from "@/mockData/Videos";


export const VideoResourcesPanel: React.FC = observer(() => {
  const store = React.useContext(StoreContext);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    store.addVideoResource(URL.createObjectURL(file));
  };

  const handleAddVideo = (videoSrc: string) => {
    store.addVideoResource(videoSrc);
  };

  const videos = videosApi;

  return (
    <div className="overflow-y-auto max-h-full hide-scrollbar">
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
        Videos
      </div>
      <div>
        {videos.map((video: string | { src: { original: string } }, index: number) => (
          <div key={index} className="relative inline-block">
            <VideoResource video={(typeof video === 'string') ? video : video.src.original} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
});
