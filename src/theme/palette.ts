const commonColor = { grey200: "rgb(229 231 235)" };
export const palette = {
  light: {
    mode: "light",
    ...commonColor,
    title: "#3F3D56",
    primary: "#3F3D56",
    secondary: "#6D6B6B",
    resumePaper: "#F9FAFB",
    menuLink: "rgb(55 65 81);",
    menuLinkHover: "rgb(0 0 0);",
    menuLinkSelected: "#000000",
  },
  dark: {
    mode: "dark",
    ...commonColor,
    title: "#cccccc",
    primary: "#bebebe",
    secondary: "#d1d1d1",
    resumePaper: "#232222",
    menuLink: "rgb(156 163 175);",
    menuLinkHover: "rgb(229 231 235);",
    menuLinkSelected: "rgb(243 244 246);",
    background: "#1b1b1b",
    text: "#bebebe",
  },
};
