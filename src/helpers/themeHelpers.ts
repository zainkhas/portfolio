import { Theme } from "@mui/system";

export const applyColor =
  (colorName: string) =>
  ({ theme }: { theme: Theme }) => {
    return theme.palette[colorName] || "inherit";
  };
