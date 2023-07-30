import { BoxProps } from "@/components";

export interface TypographyProps extends BoxProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline"
    | string;
  component?: React.ElementType;
  align?: "left" | "center" | "right" | "justify";
  color?: string;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
}
