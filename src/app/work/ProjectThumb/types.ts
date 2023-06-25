import { Project } from "@/common/types";

export type ProjectThumbProps = {
  index: number;
  project: Project;
  images: { src: string }[];
};
