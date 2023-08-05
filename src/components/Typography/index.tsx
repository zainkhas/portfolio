import { Box } from "@/components";
import { TypographyProps, TypographySxProps } from "./types";
import { typography } from "@/theme/typography";

export const Typography: React.FC<TypographyProps> = (props) => {
  const { variant = "body1", component = "p", sx, ...rest } = props;
  const variantStyles: TypographySxProps = { variant, ...typography[variant] };

  return (
    <Box component={component} sx={{ ...variantStyles, ...sx }} {...rest} />
  );
};
