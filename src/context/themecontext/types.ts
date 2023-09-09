import { ReactNode } from "react";

export type ThemeProviderProps = {
  children: ReactNode;
  isDark: boolean;
};

export type ThemeContextValues = {
  isDark: boolean;
  // eslint-disable-next-line no-unused-vars -- false positive
  updateTheme: (isDark: boolean) => void;
};
