import { ProjectType } from "../_constants/resume";
import { Layout } from "@/components/resume/work-experience/Layout";
import BlankLink from "@/components/blank-link";
import { Fragment } from "react";

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <Layout>
      <Layout.ProjectTitle
        title={project.projectTitle}
        subTitle={project.projectPeriod}
      />
      {project.projectLink && (
        <>
          {" "}
          <BlankLink href={project.projectLink}>
            {project.projectLink}
          </BlankLink>{" "}
        </>
      )}
      <Layout.InnerContainer>
        <Layout.Content type="Description">
          {project.projectDescription.map((desc, index) => (
            <Fragment key={index}>
              <span key={index}>{desc}</span> {index === 0 && <br />}
              {project.projectLink && index !== 0 && " "}
            </Fragment>
          ))}
        </Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList workList={project.workList} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">
          {project.projectStack.join(", ")}
        </Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};

export default Project;
