import { ResponsiveValues } from "@/common/types";

export enum theme_modes {
  light,
  dark,
}
type TypographyStyle = {
  fontSize?: number | string | ResponsiveValues;
  lineHeight?: number | string | ResponsiveValues;
  fontWeight?: number | string | ResponsiveValues;
};

export type TypographyTheme = {
  [variant: string]: TypographyStyle;
};
