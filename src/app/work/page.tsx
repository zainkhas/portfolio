import React, { useCallback, useState } from "react";

import { getAll } from "@/lib/common";
import { getProjects } from "@/lib/projects";
import { Content } from "@/components/Content";
import { H4 } from "@/components/Typography/H4";
import { IconButton } from "@/components/IconButton";
import { ProjectThumb } from "./ProjectThumb";
import { H1 } from "@/components/Typography/H1";
import { Menu } from "@/components/Menu";

const getData = async () => {
  const { menu } = await getAll();
  const projects = await getProjects();
  const images = projects.map((item) => ({ src: `/images/${item.image}` }));
  return {
    menu,
    projects,
    images,
  };
};

const Work = async () => {
  const { menu, projects, images } = await getData();

  return (
    <>
      <Menu menu={menu} />
      <div className="my-10">
        <H1>Projects</H1>
        <div className="md:text-xl  text-base text-title dark:text-title-dark font-normal leading-10 mt-5">
          These are the apps that I have worked on during my career
        </div>
        <Content>
          {projects.map((item, index) => (
            <div
              className="flex lg:flex-row md:flex-col flex-col items-center my-10 md:my-20 mt-20 md:mt-10"
              key={item.name}
            >
              <div className="flex-1">
                <H4>{item.name}</H4>
                <div className="my-5 mr-2 text-primary dark:text-primary-dark ">
                  <p>{item.description}</p>
                  <div className="flex my-5 items-center">
                    {item.website && item.website.length > 0 && (
                      <IconButton
                        url={item.website}
                        name="Website"
                        icon="link.svg"
                      />
                    )}
                    {item.google_play && item.google_play.length > 0 && (
                      <IconButton
                        url={item.google_play}
                        name="Play Store"
                        icon="play.svg"
                      />
                    )}
                    {item.app_store && item.app_store.length > 0 && (
                      <IconButton
                        url={item.app_store}
                        name="App Store"
                        icon="apple.svg"
                      />
                    )}
                  </div>
                </div>
              </div>
              <ProjectThumb project={item} index={index} images={images} />
            </div>
          ))}
        </Content>
      </div>
    </>
  );
};

export default Work;
