import { SKILLS } from "@/app/(resume)/resume/_constants/resume";
import { FC } from "react";
import ResumeTitle from "../ResumeTitle";

const Skills: FC = () => {
  return (
    <div className="py-10">
      <ResumeTitle>Skills.</ResumeTitle>
      <div className="flex flex-col gap-4">
        <div>
          <ul className="pl-4 list-disc flex flex-col gap-1 text-lg">
            {SKILLS.frontend.map((skill, index) => (
              <li key={index}>
                <span className="font-bold">{skill.key} : </span>
                <span>{skill.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
