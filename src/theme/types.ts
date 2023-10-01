/* eslint-disable no-unused-vars */
import { ResponsiveStyleValue } from "@/components";
export enum theme_modes {
  light,
  dark,
}
type TypographyStyle = {
  fontSize?: number | string | ResponsiveStyleValue<any>;
  lineHeight?: number | string | ResponsiveStyleValue<any>;
  fontWeight?: number | string | ResponsiveStyleValue<any>;
};

export type TypographyTheme = {
  [variant: string]: TypographyStyle;
};
