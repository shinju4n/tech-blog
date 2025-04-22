import BoldText from '@/components/bold-text';
import { ProjectType, WorkListType } from '../_constants/resume';
import { Layout } from '@/components/resume/work-experience/Layout';

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <Layout>
      <Layout.ProjectTitle title={project.projectTitle} subTitle={project.projectPeriod} />
      <Layout.InnerContainer>
        <Layout.Content type="Description">{project.projectDescription}</Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList list={<WorkList workList={project.workList} />} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">{project.projectStack.join(', ')}</Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};

export default Project;

const WorkList = ({ workList }: { workList: WorkListType[] }) => {
  return (
    <>
      {workList.map((work, i) => (
        <li key={i}>
          <BoldText>{work.featureTitle + ' : '}</BoldText>
          {work.featureDescription.map((description, i) => (
            <span key={i}>{description}</span>
          ))}
        </li>
      ))}
    </>
  );
};
