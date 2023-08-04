import { FC, useMemo } from "react";
import { Content } from "@/components/Content";
import { Box, Typography } from "@/components";
import { EducationProps } from "./types";

const Education: FC<EducationProps> = ({ education }) => {
  const items = useMemo(
    () =>
      education.map((education) => (
        <Box key={education.field} component="ul">
          <Box
            component="li"
            sx={{ ml: 2, pl: "12px", listStyleType: "square", fontSize: 20 }}
          >
            <Typography variant="medium">{education.field}</Typography>
            <Typography>{education.duration}</Typography>
            <Typography>{education.institute}</Typography>
          </Box>
        </Box>
      )),
    [education]
  );
  return (
    <Content title="Education" gap={3}>
      {items}
    </Content>
  );
};

export default Education;
