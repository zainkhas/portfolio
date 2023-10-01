import { Content } from "@/components/Content";
import { getAll } from "@/lib/common";
import { getResumeData } from "@/lib/resume";
import React from "react";
import { getTenure } from "./helpers/getTenure";
import { Metadata } from "next";
import { PAGE_TITLES } from "@/common/metaData";
import { Stack, Typography } from "@/components";
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
  const allPromise = getAll();
  const resumePromise = getResumeData();
  const [{ menu, metaData }, resume] = await Promise.all([
    allPromise,
    resumePromise,
  ]);
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
  const { metaData, resume, tenure } = await getData();
  return (
    <Stack
      bgcolor="resumePaper"
      my={{ md: 5, xs: 2 }}
      py={{ md: 10, xs: 5 }}
      px={{ md: 7, xs: 3 }}
      gap={{ md: 6, xs: 4 }}
      borderRadius={1}
    >
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
