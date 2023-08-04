import { FC, useMemo } from "react";
import { Content } from "@/components/Content";
import { Box, Typography, Stack } from "@/components";
import { ExperienceProps } from "./types";

const Experience: FC<ExperienceProps> = ({ experience, tenure }) => {
  const items = useMemo(
    () =>
      experience.map((experience) => (
        <Box key={experience.company} component="ul">
          <Stack gap={2}>
            <Box
              component="li"
              sx={{ ml: 2, pl: "12px", listStyleType: "square", fontSize: 20 }}
            >
              <Typography variant="medium">{experience.company}</Typography>
              <Typography>{experience.designation}</Typography>
              <>
                <Typography variant="small">
                  {`${tenure[experience.company].start} - ${
                    tenure[experience.company].end
                  }`}
                </Typography>
                <Typography variant="small">
                  {tenure[experience.company].duration}
                </Typography>
              </>
            </Box>

            <Stack component="ul" gap={1} ml={3}>
              {experience.responsibilities &&
                experience.responsibilities.map((resp) => (
                  <Typography
                    component="li"
                    key={resp}
                    sx={{
                      listStylePosition: "inside",
                    }}
                    variant="small"
                  >
                    {resp}
                  </Typography>
                ))}
            </Stack>
          </Stack>
        </Box>
      )),
    [experience, tenure]
  );
  return (
    <Content title="Experience" gap={3}>
      {items}
    </Content>
  );
};

export default Experience;
