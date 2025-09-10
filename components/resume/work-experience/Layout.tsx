import Typography from '@/components/ui/typography';
import BoldText from '@/components/bold-text';
import BlankLink from '@/components/blank-link';
import { FC, PropsWithChildren } from 'react';
import { WorkListType } from '@/app/(resume)/resume/_constants/resume';

interface ProjectTitleProps {
  title: string;
  subTitle?: string;
}
const ProjectTitle: FC<ProjectTitleProps> = ({ title, subTitle }) => {
  return (
    <>
      <Typography size="h3">{title}</Typography>
      {subTitle && <Typography size="muted">{subTitle}</Typography>}
    </>
  );
};

type ContentType = 'Description' | 'Work' | 'Tech Stack';

interface ContentProps {
  type: ContentType;
  children: React.ReactNode;
}
const Content = ({ type, children }: ContentProps) => {
  return (
    <div>
      <Title>{type}</Title>
      {typeof children === 'string' ? <Typography size="p">{children}</Typography> : children}
    </div>
  );
};

interface WorkListProps {
  workList: WorkListType[];
}
const WorkList: FC<WorkListProps> = ({ workList }) => {
  if (workList.length === 0) return null;
  
  return (
    <ul className="pl-4 md:pl-10 md:pr-10 xl:pr-0 list-disc flex flex-col gap-1">
      {workList.map((work, index) => (
        <li key={index}>
          <BoldText>{work.featureTitle} : </BoldText>
          {work.featureDescription.map((description, descIndex) => {
            if (work.link && descIndex === work.featureDescription.length - 1) {
              // 링크가 있는 경우 마지막 문장에서 링크 텍스트를 찾아서 링크로 변환
              const linkText = work.link.text;
              const parts = description.split(linkText);
              if (parts.length === 2) {
                return (
                  <span key={descIndex}>
                    {parts[0]}
                    <BlankLink href={work.link.url}>{linkText}</BlankLink>
                    {parts[1]}
                  </span>
                );
              }
            }
            return <span key={descIndex}>{description}</span>;
          })}
        </li>
      ))}
    </ul>
  );
};

const Title = ({ children }: PropsWithChildren) => {
  return (
    <Typography size="large" className="font-bold">
      {children}
    </Typography>
  );
};

const Container = ({ children }: PropsWithChildren) => {
  return <section className="pl-4">{children}</section>;
};

const InnerContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-4 pt-3">{children}</div>;
};

const LayoutMain = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export const Layout = Object.assign(LayoutMain, { 
  Title, 
  Container, 
  InnerContainer, 
  ProjectTitle, 
  Content, 
  WorkList 
});
