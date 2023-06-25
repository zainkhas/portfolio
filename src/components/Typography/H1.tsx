import React from "react";
import { TypographyProps } from "./types";
export const H1: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h1
      className={`md:text-4xl text-2xl font-bold text-title dark:text-title-dark ${className}`}
    >
      {children}
    </h1>
  );
};
