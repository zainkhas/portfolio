import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "data");

export const getMenuItems = () => {
  const fullPath = path.join(dataDirectory, "menu.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};

export const getMetaData = async () => {
  const fullPath = path.join(dataDirectory, "meta_data.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};

export const getAll = async () => {
  return {
    menu: getMenuItems(),
    metaData: await getMetaData(),
  };
};
