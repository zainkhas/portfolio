import fs from "fs";
import path from "path";
import { dataDirectory } from "./common";
import { Projects } from "@/common/types";

export const getProjects = (): Projects => {
  const fullPath = path.join(dataDirectory, "projects.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};
