"use client";
import ThemeProvider from "@/context/themecontext/ThemeProvider";
import { FC } from "react";
import { ThemeWrapperProps } from "./types";

const ThemeWrapper: FC<ThemeWrapperProps> = ({ isDark, children }) => {
  return <ThemeProvider isDark={isDark}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
