import { Content } from "@/components/Content";
import { H1 } from "@/components/Typography/H1";
import { getAll } from "@/lib/common";
import { getResumeData } from "@/lib/resume";
import Image from "next/image";
import React from "react";
import { getTenure } from "./helpers/getTenure";
import { Metadata } from "next";
import { PAGE_TITLES } from "@/common/metaData";

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
  const { menu, metaData, resume, skillColumns, tenure } = await getData();
  return (
    <div className="bg-resumePaper dark:bg-resumePaper-dark md:py-20 py-10 md:px-14 px-5 rounded gap-6 flex flex-col my-11">
      <div className="flex flex-col gap-4">
        <H1>{metaData.full_name}</H1>
        <h3 className="text-secondary dark:text-secondary-dark text-lg leading-10">
          {resume.tagline}
        </h3>

        <div className="flex flex-col gap-2">
          {resume.contact.map((contactItem) => (
            <a
              key={contactItem.name}
              className="flex items-center text-primary dark:text-primary-dark "
              href={contactItem.url}
              title={contactItem.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center mr-2">
                <Image
                  src={`/svg/${contactItem.icon}`}
                  alt={contactItem.name}
                  height={24}
                  width={24}
                />
              </div>

              {contactItem.name}
            </a>
          ))}
        </div>
      </div>

      <Content>{resume.about}</Content>
      <Content title="Skills">
        <div className="flex flex-row">
          <div className="flex flex-1">
            <ul className="list-disc list-inside">
              {skillColumns.left.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-1">
            <ul className="list-disc list-inside">
              {skillColumns.right.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </Content>

      <Content title="Education">
        {resume.education.map((education) => (
          <div key={education.field}>
            <div className="font-medium">{education.field}</div>
            <div className="font-normal text-lg leading-11 text-secondary dark:text-secondary-dark">
              {education.duration}
            </div>
            <div className="font-normal text-xl leading-11">
              {education.institute}
            </div>
          </div>
        ))}
      </Content>

      <Content title="Experience">
        {resume.experience.map((experience) => (
          <div key={experience.company}>
            <div className="font-medium">{experience.company}</div>
            <div className="font-normal md:text-xl text-base leading-11 ">
              {experience.designation}
            </div>
            <div className="flex flex-1">
              <div className="flex-1 font-normal text-lg leading-11 text-secondary dark:text-secondary-dark">
                {`${tenure[experience.company].start} - ${
                  tenure[experience.company].end
                }`}
              </div>
              <div className="font-normal text-lg leading-11 text-secondary dark:text-secondary-dark">
                {tenure[experience.company].duration}
              </div>
            </div>
            <ul className="list-disc list-inside mt-5 mb-10">
              {experience.responsibilities &&
                experience.responsibilities.map((resp) => (
                  <li key={resp}>{resp}</li>
                ))}
            </ul>
          </div>
        ))}
      </Content>
    </div>
  );
};

export default Resume;
