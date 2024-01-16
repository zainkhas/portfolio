import React from "react";
import { ContentProps } from "./types";
import { H4 } from "../Typography/H4";
export const Content: React.FC<ContentProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <H4>{title}</H4>}
      <div className=" font-normal md:text-xl text-base md:leading-11 leading-9 text-primary dark:text-primary-dark">
        {children}
      </div>
    </div>
  );
};
