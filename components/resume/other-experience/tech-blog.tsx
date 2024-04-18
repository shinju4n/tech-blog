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
        있습니다. 개선하고 싶은 기술적인 문제의 고민이나 새로운 기술을 공부하며 배운 것을 정리하고 있습니다.
      </Typography>
      <div className="flex flex-col gap-4 pt-4">
        <section>
          <Typography size="large" className="font-bold">
            Do.
          </Typography>
          <ul className="pl-4 list-disc flex flex-col gap-1">
            <li>Next.js의 SSR을 활용하여 SEO를 향상시켰습니다.</li>
            <li>포스팅을 MarkDown 파일로 작성하면 시멘틱 태그에 맞게 파싱할 수 있도록 개발하였습니다.</li>
            <li>반응형 레이아웃과 다크모드를 구현하였습니다.</li>
            <li>shadcn/ui 라이브러리를 사용하여 디자인 및 컴포넌트를 개발하였습니다.</li>
          </ul>
        </section>
        <section>
          <Typography size="large" className="font-bold">
            Tech Stack.
          </Typography>
          <Typography size="p">Next.js 13, TypeScript, Tailwind CSS, shadcn/ui</Typography>
        </section>
        <section>
          <Typography size="large" className="font-bold">
            Link.
          </Typography>
          <ul className="pl-4 list-disc flex flex-col gap-1">
            <li>
              링크 : <BlankLink href="https://ju4n-devlog.site">ju4n-devlog.site</BlankLink>
            </li>
            <li>
              Github : <BlankLink href="https://github.com/shinju4n/tech-blog">shinju4n/tech-blog</BlankLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
export default TechBlog;
