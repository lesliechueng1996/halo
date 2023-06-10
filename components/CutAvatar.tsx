'use client';

import { createRef } from 'react';
import { Cropper, ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

type Props = {
  imageDataUrl: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

function CutAvatar({ imageDataUrl, dialogRef }: Props) {
  const cropperRef = createRef<ReactCropperElement>();

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      return cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL('image/jpeg', 0.3);
    }
    return '';
  };

  return (
    <div className="grid grid-cols-2 h-full gap-5">
      <div className="w-full h-full flex justify-center items-center">
        <Cropper
          ref={cropperRef}
          className="w-2/3 h-2/3"
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={imageDataUrl}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          checkOrientation={false}
          autoCropArea={1}
          guides={true}
        />
      </div>
      <div className="flex flex-col gap-5 w-full h-full">
        <div className="w-full h-1/2">
          <h1 className="text-lg mb-5">预览</h1>
          <div className="img-preview w-1/4 h-1/2 overflow-hidden"></div>
        </div>
        <div className="flex gap-5">
          <button
            className="bg-sky-500 px-5 py-3 rounded-md text-white"
            onClick={() => {
              const dataUrl = getCropData();
              dialogRef.current?.close(dataUrl);
            }}
          >
            保存
          </button>
          <button
            className="bg-gray-300 px-5 py-3 rounded-md"
            onClick={() => dialogRef.current?.close()}
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
}

export default CutAvatar;
