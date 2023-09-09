import { createContext } from "react";
import { ThemeContextValues } from "./types";
export const ThemeContext = createContext({
  isDark: false,
} as ThemeContextValues);
