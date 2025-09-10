import React from 'react';
import Divider from '@/components/resume/Divider';
import Typography from '@/components/ui/typography';
import { type CompanyType } from '../_constants/resume';
import Project from './project';

const Company = ({ company }: { company: CompanyType }) => {
  return (
    <div className="flex flex-col xl:flex-row items-start">
      <div className="w-full xl:w-1/3 h-auto xl:mb-0 xl:sticky xl:top-16 xl:pr-10">
        <Typography size="h2" className="w-full ">
          {company.companyName} <span className="text-2xl">({company.companyEnglishName})</span>
        </Typography>
        <Typography size="lead">{company.companyRole}</Typography>
        <Typography size="muted">{company.period}</Typography>
        <div className="py-2">
          <Typography size="p" className="whitespace-pre-line">
            {company.projectPosition.join('\n')}
          </Typography>
        </div>
      </div>
      <div className="xl:w-2/3">
        {company.projects.map((project, i) => (
          <React.Fragment key={project.projectTitle}>
            <Project project={project} />
            {i !== company.projects.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Company;
