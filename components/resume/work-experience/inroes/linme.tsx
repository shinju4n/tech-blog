import BoldText from '@/components/bold-text';
import { Layout } from '../Layout';

const Linme: React.FC = () => {
  return (
    <Layout>
      <Layout.ProjectTitle title="린미 Linme" subTitle="2024.07 ~ 2024.09 (프론트엔드 2인 개발)" />
      <Layout.InnerContainer>
        <Layout.Content type="Description">건강 기능 식품 이커머스 플랫폼</Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList list={WORK_LIST} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">React, TanStack Query, SCSS/Sass</Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};

export default Linme;

const WORK_LIST = [
  <li key="0">
    <BoldText>레거시 코드 리팩토링 : </BoldText> 기존 레거시 코드를 리팩토링하여 코드 가독성 향상 및 재사용성 향상
  </li>,
  <li key="1">
    <BoldText>성능 최적화 : </BoldText>
    TanStack Query를 도입하여 불필요한 API 호출을 50% 감소하고 컴포넌트 분리로 페이지 로딩 속도 개선
  </li>,
  <li key="2">
    <BoldText>아키택처 개선 : </BoldText>
    DDD 원칙을 적용한 폴더 구조 재설계로 개발 생산성 향상
  </li>,
];
