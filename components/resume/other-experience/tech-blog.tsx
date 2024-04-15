import { FC } from 'react';
import BlankLink from '@/components/blank-link';
import Typography from '@/components/ui/typography';

const TechBlog: FC = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4">
        <Typography size="h3">Tech Blog.</Typography>
        <Typography size="lead">개인 기술 블로그</Typography>
        <Typography size="muted">2023.10 ~ 현재</Typography>
      </div>
      <Typography size="p">
        <BlankLink href="https://ju4n-devlog.site">ju4n-devlog.site</BlankLink> 라는 주소의 개인 기술 블로그를 운영하고
        있습니다. 개선하고 싶은 기술적인 문제의 고민이나 새로운 기술을 공부하며 배운 것을 정리하고 있습니다. Next.js 와
        Vercel로 배포하여 운영하고 있습니다.
      </Typography>
    </div>
  );
};
export default TechBlog;
