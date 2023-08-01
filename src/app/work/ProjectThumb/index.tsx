"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import ImgsViewer from "react-images-viewer";
import { Box } from "@/components";
import { ProjectThumbProps } from "./types";
import { ThumbImage } from "./ProjectThumb.styled";

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
      <Box
        flex={1}
        sx={{
          cursor: "pointer",
          "&:hover": {
            opacity: 0.7,
          },
        }}
        onClick={() => onImageCick(index)}
      >
        <ThumbImage
          src={`/images/${project.image}`}
          height={300}
          width={400}
          alt={project.name}
        />
      </Box>
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
