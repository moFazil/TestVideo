import React from 'react';
import { UploadResource } from '../entity/UploadResource';
import { UploadButton } from '../shared/UploadButton';

export const UploadPanel = () => {
    const [mediaFiles, setMediaFiles] = React.useState<File[]>([]);
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const selectedFiles = Array.from(event.target.files);
        setMediaFiles([...mediaFiles, ...selectedFiles]);
      }
    };
  
    return (
      <div>
        <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
          Upload Media
        </div>
        <UploadButton
          accept="image/*,video/*"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-center mx-2 py-2 px-4 rounded cursor-pointer"
          onChange={handleFileChange}
        />
        <div>
          {mediaFiles.map((file, index) => (
            <UploadResource key={`media-${index}`} resource={URL.createObjectURL(file)} index={index} type={file.type.includes('image') ? 'image' : 'video'} />
          ))}
        </div>
      </div>
    );
  };
  