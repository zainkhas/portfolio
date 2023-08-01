import React from "react";
import { ProjectItemProps } from "./types";
import { IconButton } from "@/components/IconButton";
import { ProjectThumb } from "./ProjectThumb";
import { Stack, Typography } from "@/components";

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  index,
  images,
}) => {
  return (
    <Stack gap={3} direction={{ md: "row" }} alignItems="center">
      <Stack flex={1} gap={2}>
        <Typography component="h4" variant="h4">
          {project.name}
        </Typography>
        <Stack gap={2}>
          <Typography>{project.description}</Typography>
          <Stack alignItems="center" gap={1} direction="row">
            {project.website && project.website.length > 0 && (
              <IconButton
                url={project.website}
                name="Website"
                icon="link.svg"
                height={27}
                width={28}
              />
            )}
            {project.google_play && project.google_play.length > 0 && (
              <IconButton
                url={project.google_play}
                name="Play Store"
                icon="play.svg"
                height={23}
                width={25}
              />
            )}
            {project.app_store && project.app_store.length > 0 && (
              <IconButton
                url={project.app_store}
                name="App Store"
                icon="apple.svg"
              />
            )}
          </Stack>
        </Stack>
      </Stack>
      <ProjectThumb project={project} index={index} images={images} />
    </Stack>
  );
};

export default ProjectItem;
