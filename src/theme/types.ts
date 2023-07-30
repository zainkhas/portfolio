export enum theme_modes {
  light,
  dark,
}

export interface TypographyTheme {
  [key: string]: number | React.CSSProperties;
}
