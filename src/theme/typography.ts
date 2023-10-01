import { TypographyTheme } from "./types";

export const typography: TypographyTheme = {
  h1: {
    fontSize: { md: 36, xs: 26 },
    lineHeight: "40px",
    fontWeight: 700,
  },
  h3: {
    fontSize: { md: 20, xs: 18 },
    lineHeight: { md: "28px", xs: "24px" },
    fontWeight: 400,
  },
  h4: {
    fontSize: { md: 24, xs: 20 },
    lineHeight: "32px",
    fontWeight: 600,
  },
  body1: {
    fontSize: { md: 20, xs: 16 },
    lineHeight: { md: "40px", xs: "36px" },
    fontWeight: 400,
  },
  medium: {
    fontSize: { md: 20, xs: 16 },
    lineHeight: "40px",
    fontWeight: 500,
  },
  small: {
    fontSize: { md: 18, xs: 15 },
    lineHeight: "28px",
  },
};
