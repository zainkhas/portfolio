interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SocialLinks extends Array<SocialLink> {}

interface MenuItem {
  name: string;
  page: string;
  hide: boolean;
}

export interface Menu extends Array<MenuItem> {}

export interface Project {
  name: string;
  description: string;
  image: string;
  website: string;
  google_play: string;
  app_store: string;
}

export interface Projects extends Array<Project> {}

export interface Contact {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  field: string;
  duration: string;
  institute: string;
}

export interface Experience {
  company: string;
  designation: string;
  joining_date: string;
  exit_date: string;
  responsibilities?: string[];
}

export interface ResumeData {
  tagline: string;
  contact: Contact[];
  about: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
}

export interface HtmlContent {
  contentHtml: string;
}

export interface MetaData {
  title: string;
  full_name: string;
  designation: string;
  company: string;
  company_url: string;
  email: string;
  phone_number: string;
  social_links: Contact[];
}

export interface Images {
  src: string;
}

export interface ResponsiveValues {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
}
