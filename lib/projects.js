import fs from "fs";
import path from "path";
const dataDirectory = path.join(process.cwd(), "data");

export const getProjects = () => {
  const fullPath = path.join(dataDirectory, "projects.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};
