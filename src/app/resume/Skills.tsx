import React, { useMemo } from "react";
import { Grid, Typography } from "@/components";
import { SkillsProps } from "./types";
import { Content } from "@/components/Content";

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const skillRows = useMemo(() => {
    const totalSkills = skills.length;
    const numCols = 2;
    const numRows = Math.ceil(totalSkills / numCols);
    return Array.from({ length: numRows }, (_, rowIndex) =>
      skills.slice(rowIndex * numCols, (rowIndex + 1) * numCols)
    );
  }, [skills]);

  const skillsRowUI = useMemo(
    () =>
      skillRows.map((rowSkills, rowIndex) => (
        <Grid
          container
          direction="column"
          key={rowIndex}
          xs={6}
          rowGap={1}
          component="ul"
        >
          {rowSkills.map((skill, colIndex) => (
            <Grid key={colIndex} component="ul">
              <Typography
                component="li"
                key={skill}
                sx={{
                  listStylePosition: "inside",
                  pl: 2,
                }}
              >
                {skill}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )),
    [skillRows]
  );

  return (
    <Content title="Skills">
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowGap={1}
        component="ul"
      >
        {skillsRowUI}
      </Grid>
    </Content>
  );
};

export default Skills;
