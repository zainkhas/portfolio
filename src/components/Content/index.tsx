import React from "react";
import { ContentProps } from "./types";
import { Box, Stack, Typography } from "@/components";

export const Content: React.FC<ContentProps> = ({ children, title, gap }) => (
  <Stack gap={2}>
    {title && (
      <Typography variant="h4" component="h4">
        {title}
      </Typography>
    )}
    <Stack gap={gap}>{children}</Stack>
  </Stack>
);
