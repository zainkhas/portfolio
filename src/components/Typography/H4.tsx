import React from "react";
import { TypographyProps } from "./types";
export const H4: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h4
      className={`font-semibold text-primary dark:text-primary-dark leading-8 md:text-2xl text-xl ${className}`}
    >
      {children}
    </h4>
  );
};
