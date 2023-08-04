import { Contact, Education, Experience } from "@/common/types";

export type ResumeHeadProps = {
  fullName: string;
  tagLine: string;
  contact: Contact[];
};

export type SkillsProps = {
  skills: string[];
};

export type EducationProps = {
  education: Education[];
};

export type ExperienceProps = {
  experience: Experience[];
  tenure: Record<string, any>;
};
