import { ThemeContext } from "@/context/themecontext/ThemeContext";
import { Switch } from "@mui/base";
import { useCallback, useContext } from "react";

const ThemeToggle = () => {
  const { isDark, updateTheme } = useContext(ThemeContext);
  const onChange = useCallback(
    (e) => {
      updateTheme(e.target.checked);
    },
    [updateTheme]
  );
  return <Switch checked={isDark} onChange={onChange} />;
};

export default ThemeToggle;
