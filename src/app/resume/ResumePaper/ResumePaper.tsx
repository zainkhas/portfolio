import { FC } from "react";
import { ResumePaperProps } from "./types";

const ResumePaper: FC<ResumePaperProps> = ({ children }) => (
  <div className="bg-resumePaper dark:bg-resumePaper-dark md:py-20 py-10 md:px-14 px-5 rounded flex flex-col my-11 gap-14">
    {children}
  </div>
);

export default ResumePaper;
