"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import ImgsViewer from "react-images-viewer";
import { ProjectThumbProps } from "./types";

export const ProjectThumb: React.FC<ProjectThumbProps> = ({
  project,
  index,
  images,
}) => {
  const [currImg, setCurrImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const onCloseImageViewer = useCallback(() => {
    setViewerIsOpen(false);
  }, []);

  const onImageCick = useCallback((imageIndex: number) => {
    setCurrImage(imageIndex);
    setViewerIsOpen(true);
  }, []);

  const onPrevImage = useCallback(() => setCurrImage((prev) => prev - 1), []);

  const onNextImage = useCallback(() => setCurrImage((prev) => prev + 1), []);

  return (
    <>
      <div
        className="flex-1 ml-2 rounded-lg cursor-pointer hover:opacity-70"
        onClick={() => onImageCick(index)}
      >
        <Image
          src={`/images/${project.image}`}
          height={388}
          width={550}
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          alt={project.name}
        />
      </div>
      <ImgsViewer
        imgs={images}
        currImg={currImg}
        isOpen={viewerIsOpen}
        onClose={onCloseImageViewer}
        onClickPrev={onPrevImage}
        onClickNext={onNextImage}
      />
    </>
  );
};
