import React from "react";
import { Content } from "../Content";
import { MainContentProps } from "./types";
import { Typography } from "@/components";

export const MainContent: React.FC<MainContentProps> = ({ title, html }) => {
  return (
    <Content title={title}>
      <Typography
        component="span"
        dangerouslySetInnerHTML={{ __html: html }}
        sx={{
          "& li": {
            display: "block",
          },
        }}
      />
    </Content>
  );
};
