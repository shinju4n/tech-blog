import { FC } from 'react';
import BlankLink from '@/components/blank-link';
import { Layout } from '../work-experience/Layout';

const TechBlog: FC = () => {
  return (
    <Layout>
      <Layout.ProjectTitle title="개인 기술 블로그" subTitle="2023.10 ~ 현재" />
      <Layout.InnerContainer>
        <Layout.Content type="Description">
          <BlankLink href="https://ju4n-devlog.site">ju4n-devlog.site</BlankLink> 라는 개인 기술 블로그를 직접 개발하고
          배포하여 운영하고 있습니다. 최신 기술 트렌드와 해결하고 싶은 기술적인 문제들에대해서 다루고 있으며, 새로운
          기술을 공부하고 배운 내용을 체계적으로 정리하고 공유하고 있습니다. 있습니다.
        </Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList list={WORK_LIST} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">Next.js 13, TypeScript, Tailwind CSS, shadcn/ui</Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};
export default TechBlog;

const WORK_LIST = [
  <li key="1">검색 엔진에서 높은 순위에 노출 되도록 Next.js의 SSR을 활용하여 SEO를 향상시켰습니다.</li>,
  <li key="2">포스팅을 MarkDown 파일로 작성하면 시멘틱 태그에 맞게 파싱할 수 있도록 개발하였습니다.</li>,
  <li key="3">
    사용자 경험을 향상시키기 위해 다양한 디바이스와 사용 환경에 대응할 수 있도록 반응형 레이아웃과 다크모드를
    구현하였습니다.
  </li>,
  <li key="4">
    기술 블로그를 제작하면서 개발 생산성, UI의 일관성, 반응형 디자인, 커스터마이징 용이성 등을 고려하여 shadcn/ui
    라이브러리를 선택하여 제작하였습니다.
  </li>,
];
