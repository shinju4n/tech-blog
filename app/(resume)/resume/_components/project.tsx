import { ProjectType } from '../_constants/resume';
import { Layout } from '@/components/resume/work-experience/Layout';
import BlankLink from '@/components/blank-link';

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <Layout>
      <Layout.ProjectTitle title={project.projectTitle} subTitle={project.projectPeriod} />
      <Layout.InnerContainer>
        <Layout.Content type="Description">
          {project.projectDescription.map((desc, index) => (
            <span key={index}>
              {desc}
              {project.projectLink && index === 0 && (
                <>
                  {' '}
                  <BlankLink href={project.projectLink}>{project.projectLink}</BlankLink>
                  {' '}
                </>
              )}
            </span>
          ))}
        </Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList workList={project.workList} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">{project.projectStack.join(', ')}</Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};

export default Project;
