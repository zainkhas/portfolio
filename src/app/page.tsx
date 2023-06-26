import React from "react";
import { getAbout, getFooter } from "../lib/about";
import { getAll } from "../lib/common";
import { Menu } from "@/components/Menu";
import { MainHeader } from "@/components/MainHeader";
import { Content } from "@/components/Content";
import { SocialLinks } from "@/components/SocialLinks";
import { Metadata } from "next";
import { PAGE_TITLES } from "@/common/metaData";
import { MainContent } from "@/components/MainContent";

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
  const { about, metaData, menu, footer } = await getData();
  const { title, designation, company, company_url, social_links } = metaData;

  return (
    <div className="flex flex-col flex-1 justify-center gap-10">
      <Menu menu={menu} />
      <MainHeader
        fullName={title}
        designation={designation}
        company={company}
        companyUrl={company_url}
      />
      <MainContent title="About me" html={about.contentHtml} />
      <div id="contact">
        <MainContent title="Contact" html={footer.contentHtml} />
        <SocialLinks links={social_links} />
      </div>
    </div>
  );
};

export default Main;
