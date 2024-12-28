import BoldText from '@/components/bold-text';
import { Layout } from '../Layout';

const Sgis: React.FC = () => {
  return (
    <Layout>
      <Layout.ProjectTitle title="SGIS KOREA" subTitle="2024.11 ~ 2024.12 (프론트엔드 개발)" />
      <Layout.InnerContainer>
        <Layout.Content type="Description">보험 청구 웹앱 서비스</Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList list={WORK_LIST} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">React, TypeScript, Tanstack Query, Formik, Yup</Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};

export default Sgis;

const WORK_LIST = [
  <li key="0">
    <BoldText>폼 관리 시스템 구축 : </BoldText>
    Formik과 Yup을 활용하여 복잡한 보험 청구 폼의 상태 관리 및 유효성 검증 로직을 체계화하여 사용자 경험 개선
  </li>,
  <li key="1">
    <BoldText>폼 데이터 지속성 시스템 구축 : </BoldText>
    useFormPersist 커스텀 훅을 개발하여 localStorage 기반의 폼 데이터 자동 저장 기능을 구현했으며, 이를 여러 보험 청구
    폼에서 재사용하여 개발 생산성 향상 및 일관된 사용자 경험 제공
  </li>,
];
