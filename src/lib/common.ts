import fs from "fs";
import path from "path";
import { Menu, MetaData } from "../common/types";

export const dataDirectory = path.join(process.cwd(), "src/data");

export const getMenuItems = (): Menu => {
  const fullPath = path.join(dataDirectory, "menu.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};

export const getMetaData = async (): Promise<MetaData> => {
  const fullPath = path.join(dataDirectory, "meta_data.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};

export const getAll = async (): Promise<{ menu: Menu; metaData: MetaData }> => {
  return {
    menu: getMenuItems(),
    metaData: await getMetaData(),
  };
};
