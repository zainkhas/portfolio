import { applyColor } from "@/helpers/themeHelpers";
import { styled } from "@mui/system";

export const MenuLink = styled("a")<{ isActive?: boolean }>`
  cursor: pointer;
  color: ${({ isActive }) =>
    applyColor(isActive ? "menuLinkSelected" : "menuLink")};
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;

  &:hover {
    color: ${applyColor("menuLinkHover")};
  }
`;
