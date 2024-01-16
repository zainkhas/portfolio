import { Content } from "@/components/Content";
import { FC } from "react";
import { ExperienceProps } from "./types";

const Experience: FC<ExperienceProps> = ({ experience, tenure }) => (
  <Content title="Experience">
    {experience.map((experience) => (
      <ul key={experience.company} className="list-disc ml-4">
        <li className="pl-3">
          <p className="font-medium md:text-xl text-base md:leading-8">
            {experience.company}
          </p>
          <p className="font-normal md:text-xl text-base md:leading-8">
            {experience.designation}
          </p>
          <p className="font-medium md:text-xl text-base md:leading-8 text-secondary dark:text-secondary-dark">
            {`${tenure[experience.company].start} - ${
              tenure[experience.company].end
            }`}
          </p>
          <p className="font-medium md:text-xl text-base md:leading-8 text-secondary dark:text-secondary-dark">
            {tenure[experience.company].duration}
          </p>
          <ul className="list-disc list-inside mt-5 mb-10">
            {experience.responsibilities &&
              experience.responsibilities.map((resp) => (
                <li key={resp}>{resp}</li>
              ))}
          </ul>
        </li>
      </ul>
    ))}
  </Content>
);

export default Experience;
