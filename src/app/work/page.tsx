import React from "react";
import { getProjects } from "@/lib/projects";
import { Content } from "@/components/Content";

import { Metadata } from "next";
import { PAGE_TITLES } from "@/common/metaData";
import { Stack, Typography } from "@/components";
import ProjectItem from "./ProjectItem";

export const generateMetadata = (): Metadata => {
  return {
    title: PAGE_TITLES.WORK,
  };
};

const getData = async () => {
  const projects = await getProjects();
  const images = projects.map((item) => ({ src: `/images/${item.image}` }));
  return {
    projects,
    images,
  };
};

const Work = async () => {
  const { projects, images } = await getData();

  return (
    <Stack my={5} gap={3}>
      <>
        <Typography variant="h1" component="h1">
          Projects
        </Typography>
        <Typography my={2}>
          These are the apps that I have worked on during my career
        </Typography>
      </>
      <Content gap={{ md: 6, xs: 4 }}>
        {projects.map((item, index) => (
          <ProjectItem
            key={item.name}
            project={item}
            index={index}
            images={images}
          />
        ))}
      </Content>
    </Stack>
  );
};

export default Work;
