import { FC } from 'react';
import BlankLink from '@/components/blank-link';
import { Layout } from '../work-experience/Layout';
import BoldText from '@/components/bold-text';

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
  <li key="1">
    <BoldText>Next.js의 SSR을 활용한 SEO 향상 : </BoldText>
    검색 엔진 최적화를 위해 Next.js의 서버 사이드 렌더링(SSR)을 활용하여 SEO 성능을 크게 향상시켰습니다.
  </li>,
  <li key="2">
    <BoldText>MarkDown 파일 파싱 : </BoldText>
    포스팅을 MarkDown 파일로 작성할 수 있도록 하고, 시멘틱 태그로 변환하여 접근성과 검색 엔진 가독성을 개선하는 파싱
    로직을 개발하였습니다.
  </li>,
  <li key="3">
    <BoldText>반응형 레이아웃 및 다크모드 구현 : </BoldText>
    다양한 디바이스와 사용 환경에서 일관된 사용자 경험을 제공하기 위해 반응형 레이아웃과 다크모드를 구현하여 모바일 및
    데스크탑 사용자 모두에게 최적의 인터페이스를 제공하였습니다.
  </li>,
  <li key="4">
    <BoldText>개발 생산성과 커스터마이징 용이성을 고려한 shadcn/ui 라이브러리 사용 : </BoldText>
    기술 블로그 제작 시, 개발 생산성과 UI 일관성을 유지하고 반응형 디자인 및 커스터마이징 용이성을 높이기 위해 shadcn/ui
    라이브러리를 선택하여 사용하였습니다.
  </li>,
];
