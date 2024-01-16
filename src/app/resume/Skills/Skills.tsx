import { Content } from "@/components/Content";
import { FC } from "react";
import { SkillsProps } from "./types";

const Skills: FC<SkillsProps> = ({ skills }) => (
  <Content title="Skills">
    <div className="grid grid-cols-2 gap-4">
      {skills.map((column, index) => (
        <div key={`col-${index}`}>
          <ul className="list-inside list-disc">
            {column.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Content>
);

export default Skills;
