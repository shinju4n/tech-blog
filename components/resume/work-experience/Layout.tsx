import Typography from '@/components/ui/typography';
import { FC, PropsWithChildren } from 'react';

interface ProjectTitleProps {
  title: string;
  subTitle?: string;
}
const ProjectTitle: FC<ProjectTitleProps> = ({ title, subTitle }) => {
  return (
    <>
      <Typography size="h3">{title}</Typography>
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
      {typeof children === 'string' ? <Typography size="p">{children}</Typography> : children}
    </div>
  );
};

interface WorkListProps {
  list: React.ReactNode[];
}
const WorkList: FC<WorkListProps> = ({ list }) => {
  return <ul className="pl-4 md:pl-10 md:pr-10 xl:pr-0 list-disc flex flex-col gap-1">{list}</ul>;
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
export const Layout = Object.assign(LayoutMain, { Title, Container, InnerContainer, ProjectTitle, Content, WorkList });
