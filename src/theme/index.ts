import { createTheme } from "@mui/system";
import { theme_modes } from "./types";

const commonColor = { grey200: "rgb(229 231 235)" };

export const theme = (mode: theme_modes) =>
  createTheme({
    palette: {
      ...commonColor,
      ...(mode === theme_modes.light
        ? {
            title: "#3F3D56",
            primary: "#3F3D56",
            secondary: "#6D6B6B",
            resumePaper: "#F9FAFB",
            menuLink: "rgb(55 65 81);",
            menuLinkHover: "rgb(0 0 0);",
            menuLinkSelected: "rgb(243 244 246);",
          }
        : {
            title: "#cccccc",
            primary: "#bebebe",
            secondary: "#d1d1d1",
            resumePaper: "#232222",
            menuLink: "rgb(156 163 175);",
            menuLinkHover: "rgb(229 231 235);",
            menuLinkSelected: "rgb(243 244 246);",
          }),
    },
  });
