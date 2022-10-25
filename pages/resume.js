import Head from "next/head";
import React, { useMemo } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Content from "../components/Content";
import { getAll } from "../lib/common";
import { getResumeData } from "../lib/resume";
import Title from "../components/Title";
import moment from "moment";
import Image from "next/image";

export const siteTitle = "Resume | Zain Ul Abdin Khaskheli";

export async function getStaticProps() {
  const { menu, metaData } = await getAll();
  const resume = await getResumeData();
  const skillColumns = {
    left: resume.skills.splice(0, parseInt(resume.skills.length / 2) + 1),
    right: resume.skills,
  };
  return {
    props: {
      menu,
      metaData,
      resume,
      skillColumns,
    },
  };
}

const Resume = ({ menu, metaData, resume, skillColumns }) => {
  const tenure = useMemo(() => {
    return resume.experience.reduce((obj, item) => {
      const startDate = moment(item.joining_date, "DD-MM-YYYY");
      const exitDate = item.exit_date
        ? moment(item.exit_date, "DD-MM-YYYY")
        : moment();
      const duration_oject = {
        years: moment.duration(exitDate.diff(startDate)).years(),
        months: moment.duration(exitDate.diff(startDate)).months(),
      };

      let duration = "";
      if (duration_oject.years > 0) {
        duration += `${duration_oject.years} ${
          duration_oject.years > 1 ? "yrs" : "yr"
        } `;
      }
      if (duration_oject.months > 0) {
        const monhDuration = `${duration_oject.months} ${
          duration_oject.months > 1 ? "mos" : "mo"
        }`;

        if (duration_oject.years > 1) {
          duration += `, ${monhDuration}`;
        } else {
          duration += monhDuration;
        }
      } else {
        if (duration_oject.years === 0) {
          duration = "1 mo";
        }
      }

      obj[item.company] = {
        start: startDate.format("MMM YYYY"),
        end: item.exit_date ? exitDate.format("MMM YYYY") : "Present",
        duration: duration.trim(),
      };
      return obj;
    }, {});
  });

  console.log(tenure);
  return (
    <Layout menu={menu}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div>
        <div className="bg-[#F9FAFB] py-20 px-14 rounded">
          <h1 className="text-4xl font-bold text-title">{metaData.fullName}</h1>
          <h3 className="text-secondary text-lg leading-10">
            {resume.tagline}

            <div className="mt-4">
              {resume.contact.map((contactItem) => (
                <a
                  className="flex items-center text-primary"
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
          </h3>

          <Section className="my-8">
            <Content>{resume.about}</Content>
          </Section>
          <Section className="my-8">
            <Title>Skills</Title>
            <Content>
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
          </Section>

          <Section className="my-8">
            <Title>Education</Title>
            {resume.education.map((education) => (
              <Content key={education.field}>
                <div>
                  <div className="font-medium">{education.field}</div>
                  <div className="font-normal text-lg leading-11 text-secondary">
                    {education.duration}
                  </div>
                  <div className="font-normal text-xl leading-11">
                    {education.institute}
                  </div>
                </div>
              </Content>
            ))}
          </Section>

          <Section className="my-8">
            <Title>Experience</Title>
            {resume.experience.map((experience) => (
              <Content key={experience.company}>
                <div className="my-10">
                  <div className="font-medium">{experience.company}</div>
                  <div className="font-normal text-xl leading-11 ">
                    {experience.designation}
                  </div>
                  <div className="flex flex-1">
                    <div className="flex-1 font-normal text-lg leading-11 text-secondary">
                      {`${tenure[experience.company].start} - ${
                        tenure[experience.company].end
                      }`}
                    </div>
                    <div className="font-normal text-lg leading-11 text-secondary">
                      {tenure[experience.company].duration}
                    </div>
                  </div>
                  <ul className="list-disc list-inside mt-5 mb-10">
                    {experience.responsibilities.map((resp) => (
                      <li key={resp}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </Content>
            ))}
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
