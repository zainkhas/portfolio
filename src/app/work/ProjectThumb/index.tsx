"use client";
import React, { useCallback, useState } from "react";
import { Box } from "@/components";
import { ProjectThumbProps } from "./types";
import { ThumbImage } from "./ProjectThumb.styled";
import dynamic from "next/dynamic";

const ImgsViewer = dynamic(() => import("react-images-viewer"), { ssr: false });

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
        sx={{
          cursor: "pointer",
          "&:hover": {
            opacity: 0.7,
          },
        }}
        onClick={() => onImageCick(index)}
      >
        <Box
          position="relative"
          width={{ xs: 327, md: 400 }}
          height={{ xs: 245, md: 300 }}
        >
          <ThumbImage
            src={`/images/${project.image}`}
            alt={project.name}
            fill
          />
        </Box>
      </Box>
      {viewerIsOpen && (
        <ImgsViewer
          imgs={images}
          currImg={currImg}
          isOpen={viewerIsOpen}
          onClose={onCloseImageViewer}
          onClickPrev={onPrevImage}
          onClickNext={onNextImage}
        />
      )}
    </>
  );
};
