import { getAll } from "@/lib/common";
import { getResumeData } from "@/lib/resume";
import { getTenure } from "./helpers/getTenure";
import { Metadata } from "next";
import { PAGE_TITLES } from "@/common/metaData";
import { ResumeHeader } from "./ResumeHeader";
import { ResumePaper } from "./ResumePaper";
import { Skills } from "./Skills";
import { About } from "./About";
import { Education } from "./Education";
import { Experience } from "./Experience";

export const generateMetadata = (): Metadata => ({
  title: PAGE_TITLES.RESUME,
});

const getData = async () => {
  const { menu, metaData } = await getAll();
  const resume = await getResumeData();
  const skills = [
    resume.skills.splice(0, resume.skills.length / 2),
    resume.skills,
  ];
  const tenure = getTenure(resume);
  return {
    menu,
    metaData,
    resume,
    skills,
    tenure,
  };
};

const Resume = async () => {
  const { metaData, resume, skills, tenure } = await getData();

  const { full_name } = metaData;
  const { about, tagline, contact, education, experience } = resume;
  return (
    <ResumePaper>
      <ResumeHeader fullName={full_name} tagline={tagline} contacts={contact} />
      <About about={about} />
      <Skills skills={skills} />
      <Education education={education} />
      <Experience experience={experience} tenure={tenure} />
    </ResumePaper>
  );
};

export default Resume;
