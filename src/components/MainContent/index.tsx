import React from "react";
import { Content } from "../Content";
import { MainContentProps } from "./types";

export const MainContent: React.FC<MainContentProps> = ({ title, html }) => {
  return (
    <Content title={title}>
      <div
        className="text-primary dark:text-primary-dark leading-10"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Content>
  );
};
