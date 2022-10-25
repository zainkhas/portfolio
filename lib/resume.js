import fs from "fs";
import path from "path";
const dataDirectory = path.join(process.cwd(), "data");

export const getResumeData = () => {
  const fullPath = path.join(dataDirectory, "resume.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};
