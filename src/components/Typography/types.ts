import { BoxProps, SxProps } from "@/components";
import { TypographyTheme } from "@/theme/types";

export interface TypographyProps extends BoxProps {
  variant?: keyof TypographyTheme;
  component?: React.ElementType;
  align?: "left" | "center" | "right" | "justify";
  color?: string;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  sx?: SxProps;
}

export type TypographySxProps = SxProps & TypographyTheme;
