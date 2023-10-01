import React from "react";
import { ResponsiveStyleValue } from "@/components";
export type ContentProps = {
  children: React.ReactNode;
  title?: string;
  gap?: ResponsiveStyleValue<any>;
};
