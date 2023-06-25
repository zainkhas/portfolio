import React from "react";
import { TypographyProps } from "./types";
export const H3: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h3
      className={`md:text-xl text-lg text-title dark:text-title-dark font-normal leading-10 ${className}`}
    >
      {children}
    </h3>
  );
};
