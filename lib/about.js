import fs from "fs";
import path from "path";

import { remark } from "remark";
import html from "remark-html";
import breaks from "remark-breaks";

const dataDirectory = path.join(process.cwd(), "data");

export const getAbout = async () => {
  const fullPath = path.join(dataDirectory, "about.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const processedContent = await remark()
    .use(html)
    .use(breaks)
    .process(fileContents);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
  };
};

export const getFooter = async () => {
  const fullPath = path.join(dataDirectory, "footer.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const processedContent = await remark()
    .use(html)
    .use(breaks)
    .process(fileContents);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
  };
};
