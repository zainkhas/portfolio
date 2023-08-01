import React, { CSSProperties } from "react";
import { Box } from "@/components";
import { TypographyProps } from "./types";
import { typography } from "@/theme/typography";

export const Typography: React.FC<TypographyProps> = (props) => {
  const { variant = "body1", component = "p", sx, ...rest } = props;
  const variantStyles: CSSProperties =
    typeof typography[variant] === "number"
      ? { fontSize: typography[variant] }
      : typography[variant] || {};

  return (
    <Box component={component} sx={{ ...variantStyles, ...sx }} {...rest} />
  );
};
