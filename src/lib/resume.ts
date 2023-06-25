import fs from "fs";
import path from "path";
import { dataDirectory } from "./common";
import { ResumeData } from "../common/types";

export const getResumeData = (): ResumeData => {
  const fullPath = path.join(dataDirectory, "resume.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};
