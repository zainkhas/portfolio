import { createTheme } from "@mui/system";
import { theme_modes } from "./types";
import { palette } from "./palette";
import { breakpoints } from "./breakpoints";

export const theme = (mode: theme_modes) =>
  createTheme({
    breakpoints,
    palette: {
      ...(mode === theme_modes.light ? palette.light : palette.dark),
    },
  });
