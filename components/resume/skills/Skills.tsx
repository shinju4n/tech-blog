import Typography from "@/components/ui/typography";
import { SKILLS } from "@/app/(resume)/resume/_constants/resume";
import { FC } from "react";
import ResumeTitle from "../ResumeTitle";

const Skills: FC = () => {
  return (
    <div className="py-10">
      <ResumeTitle>Skills.</ResumeTitle>
      <div className="flex flex-col gap-4">
        <div>
          <Typography size="h3" className="mb-2">
            Front-end
          </Typography>
          <ul className="pl-4 list-disc flex flex-col gap-1">
            {SKILLS.frontend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <Typography size="h3" className="mb-2">
            Back-end
          </Typography>
          <ul className="pl-4 list-disc flex flex-col gap-1">
            {SKILLS.backend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
