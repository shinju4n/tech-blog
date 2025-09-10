import React, { FC } from 'react';
import { OTHER_EXPERIENCES } from '@/app/(resume)/resume/_constants/resume';
import { Layout } from '../work-experience/Layout';
import ResumeTitle from '../ResumeTitle';
import Divider from '../Divider';

const OtherExperience: FC = () => {
  return (
    <div className="py-10">
      <ResumeTitle>Other Experience.</ResumeTitle>
      {OTHER_EXPERIENCES.map((experience, index) => (
        <React.Fragment key={experience.projectTitle}>
          <Layout>
            <Layout.ProjectTitle title={experience.projectTitle} subTitle={experience.projectPeriod} />
            <Layout.InnerContainer>
              <Layout.Content type="Description">
                {experience.projectDescription.map((desc, descIndex) => (
                  <span key={descIndex}>
                    {desc}
                    {experience.projectLink && descIndex === 0 && (
                      <>
                        {' '}
                        <a
                          href={experience.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary dark:text-cyan-500 transition-colors hover:text-cyan-500 dark:hover:text-cyan-300"
                        >
                          {experience.projectLink}
                        </a>
                        {' '}
                      </>
                    )}
                  </span>
                ))}
              </Layout.Content>
              {experience.workList.length > 0 && (
                <Layout.Content type="Work">
                  <Layout.WorkList workList={experience.workList} />
                </Layout.Content>
              )}
              {experience.projectStack.length > 0 && (
                <Layout.Content type="Tech Stack">
                  {experience.projectStack.join(', ')}
                </Layout.Content>
              )}
            </Layout.InnerContainer>
          </Layout>
          {index < OTHER_EXPERIENCES.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OtherExperience;