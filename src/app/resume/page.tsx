import { Content } from "@/components/Content";
import { H1 } from "@/components/Typography/H1";
import { getAll } from "@/lib/common";
import { getResumeData } from "@/lib/resume";
import Image from "next/image";
import React from "react";
import { getTenure } from "./helpers/getTenure";
import { Metadata } from "next";
import { PAGE_TITLES } from "@/common/metaData";
import { Box, Stack, Typography } from "@/components";
import ResumeHead from "./ResumeHead";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

export const generateMetadata = (): Metadata => {
  return {
    title: PAGE_TITLES.RESUME,
  };
};

const getData = async () => {
  const { menu, metaData } = await getAll();
  const resume = await getResumeData();
  const skillColumns = {
    left: resume.skills.splice(0, resume.skills.length / 2),
    right: resume.skills,
  };
  const tenure = getTenure(resume);
  return {
    menu,
    metaData,
    resume,
    skillColumns,
    tenure,
  };
};
const Resume = async () => {
  const { metaData, resume, skillColumns, tenure } = await getData();
  return (
    <Stack bgcolor="resumePaper" my={5} py={10} px={7} gap={6} borderRadius={1}>
      <ResumeHead
        fullName={metaData?.full_name}
        tagLine={resume?.tagline}
        contact={resume?.contact}
      />

      <Content>
        <Typography>{resume.about}</Typography>
      </Content>

      <Skills skills={resume.skills} />

      <Education education={resume.education} />

      <Experience experience={resume.experience} tenure={tenure} />
    </Stack>
  );
};

export default Resume;
