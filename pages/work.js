import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Title from "../components/Title";
import { getAll } from "../lib/common";
import { getProjects } from "../lib/projects";
import ImgsViewer from "react-images-viewer";
import IconButton from "../components/IconButton";

export const siteTitle = "Zain Ul Abdin Khaskheli | Work";

export async function getStaticProps() {
  const { menu } = await getAll();
  const projects = await getProjects();
  const images = projects.map((item) => ({ src: `/images/${item.image}` }));
  return {
    props: {
      menu,
      projects,
      images,
    },
  };
}

const Work = ({ menu, projects, images }) => {
  const [currImg, setCurrImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const onImageCick = useCallback((imageIndex) => {
    setCurrImage(imageIndex);
    setViewerIsOpen(true);
  });

  const onCloseImageViewer = useCallback(() => {
    setViewerIsOpen(false);
  });

  const onPrevImage = useCallback(() => setCurrImage((prev) => prev - 1));

  const onNextImage = useCallback(() => setCurrImage((prev) => prev + 1));

  return (
    <Layout
      menu={menu}
      title={"Projects"}
      description="These are the apps that I have worked on during my career"
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Section>
        <Content>
          {projects.map((item, index) => (
            <div className="flex items-center my-10">
              <div className="flex-1">
                <Title>{item.name}</Title>
                <div className="my-5 mr-2 text-primary">
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
              <div
                className="flex-1 ml-2 rounded-lg cursor-pointer hover:opacity-70"
                onClick={() => onImageCick(index)}
              >
                <Image
                  src={`/images/${item.image}`}
                  height={388}
                  width={550}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </Content>
      </Section>
      <ImgsViewer
        imgs={images}
        currImg={currImg}
        isOpen={viewerIsOpen}
        onClose={onCloseImageViewer}
        onClickPrev={onPrevImage}
        onClickNext={onNextImage}
      />
    </Layout>
  );
};

export default Work;
