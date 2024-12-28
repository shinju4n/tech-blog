import BoldText from '@/components/bold-text';
import { Layout } from '../Layout';

const KasRental: React.FC = () => {
  return (
    <Layout>
      <Layout.ProjectTitle title="한국 공항 렌탈 서비스" subTitle="2024.11 ~ 유지보수 진행중 (프론트엔드 개발)" />
      <Layout.InnerContainer>
        <Layout.Content type="Description">
          지게차, 물류장비, 배터리, 안전 솔루션등 한국 공항에서 관리하는 렌탈을 위한 웹 서비스
        </Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList list={WORK_LIST} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">Next.js 14, TypeScript, Tanstack Query, React-hook-form, zod</Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};

export default KasRental;

const WORK_LIST = [
  <li key="0">
    <BoldText>레거시 코드 리팩토링 : </BoldText>
    중복된 UI 로직을 공통 컴포넌트로 추출하고 디자인 시스템을 구축하여 개발 생산성 30% 향상. Input, Button, Modal 등
    40개 이상의 공통 컴포넌트 라이브러리 구축 및 문서화
  </li>,
  <li key="1">
    <BoldText>토스페이먼츠 결제 시스템 구현 : </BoldText>
    토스페이먼츠 SDK를 활용하여 카드 결제, 가상계좌 발급, 결제 취소 등 결제 프로세스 구현. 결제 상태 관리 및 에러
    핸들링으로 안정적인 결제 시스템 구축
  </li>,
];
