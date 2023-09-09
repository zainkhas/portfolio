import { FC, useCallback, useState } from "react";
import { setCookie } from "cookies-next";
import { ThemeContext } from "./ThemeContext";
import { ThemeContextValues, ThemeProviderProps } from "./types";
import { theme_modes } from "@/theme/types";
import { COOKIE_DARK_THEME } from "@/common/constants";

const ThemeProvider: FC<ThemeProviderProps> = ({ children, isDark }) => {
  const [dark, setDark] = useState<boolean>(isDark);

  const updateTheme = useCallback((value: boolean) => {
    setDark(value);
    setCookie(COOKIE_DARK_THEME, value ? theme_modes.dark : theme_modes.light);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDark: dark, updateTheme } as ThemeContextValues}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
