import React from "react";
import { getAbout, getFooter } from "../lib/about";
import { getAll } from "../lib/common";
import { MainHeader } from "@/components/MainHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { MainContent } from "@/components/MainContent";
import { Metadata } from "next";
import { PAGE_TITLES } from "@/common/metaData";
import { Stack, Box } from "@/components";

export const generateMetadata = (): Metadata => {
  return {
    title: PAGE_TITLES.MAIN,
  };
};

const getData = async () => {
  const about = await getAbout();
  const footer = await getFooter();
  const { metaData, menu } = await getAll();
  return {
    about,
    metaData,
    menu,
    footer,
  };
};

const Main = async () => {
  const { about, metaData, footer } = await getData();
  const { title, designation, company, company_url, social_links } = metaData;

  return (
    <Stack justifyContent="center" gap={4} my={1}>
      <MainHeader
        fullName={title}
        designation={designation}
        company={company}
        companyUrl={company_url}
      />
      <MainContent title="About me" html={about.contentHtml} />
      <Box id="contact">
        <MainContent title="Contact" html={footer.contentHtml} />
        <SocialLinks links={social_links} />
      </Box>
    </Stack>
  );
};

export default Main;
