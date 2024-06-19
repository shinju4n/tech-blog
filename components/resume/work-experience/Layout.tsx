import Typography from '@/components/ui/typography';
import { FC, PropsWithChildren } from 'react';

interface ProjectTitleProps {
  children: React.ReactNode;
  subTitle?: string;
}
const ProjectTitle: FC<ProjectTitleProps> = ({ children, subTitle }) => {
  return (
    <>
      <Typography size="h3">{children}</Typography>
      <Typography size="muted">{subTitle}</Typography>
    </>
  );
};

interface ContentProps {
  type: 'Description' | 'Work' | 'Tech Stack';
  children: React.ReactNode;
}
const Content = ({ type, children }: ContentProps) => {
  return (
    <div>
      <Title>{type}</Title>
      {children}
    </div>
  );
};

interface WorkListProps {
  list: React.ReactNode[];
}
const WorkList: FC<WorkListProps> = ({ list }) => {
  return <ul className="pl-4 list-disc flex flex-col gap-1">{list}</ul>;
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
  return <div className="flex flex-col gap-4 pt-3 pl-4">{children}</div>;
};

const LayoutMain = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};
export const Layout = Object.assign(LayoutMain, { Title, Container, InnerContainer, ProjectTitle, Content, WorkList });
