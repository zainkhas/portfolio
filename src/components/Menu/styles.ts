import { SxProps } from "@/components";

const baseMenuStyles: SxProps = {
  gap: { xs: 1, md: 4 },
  py: { xs: 4, md: 0 },
  px: 3,
};

export const menuOpenStyles: SxProps = {
  ...baseMenuStyles,
  position: "fixed",
  bottom: 0,
  top: 60,
  left: 0,
  right: 0,
  backgroundColor: "resumePaper",
};

export const menuCloseStyles: SxProps = {
  ...baseMenuStyles,
  flexDirection: { md: "row" },
  display: { xs: "none", md: "flex" },
};
