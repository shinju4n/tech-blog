import BoldText from '@/components/bold-text';
import { Layout } from '../Layout';

const MetamonsterPage: React.FC = () => {
  return (
    <Layout>
      <Layout.ProjectTitle title="메타몬스터 자사 페이지" subTitle="2024.12 ~ 진행중 (프론트엔드 개발)" />
      <Layout.InnerContainer>
        <Layout.Content type="Description">견적서 작성 및 문의를 위한 자사 웹 페이지 개발</Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList list={WORK_LIST} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">
          Next.js 15, TypeScript, Tanstack Query, React-hook-form, zod, shadcn/ui
        </Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};

export default MetamonsterPage;

const WORK_LIST = [
  <li key="0">
    <BoldText>실시간 견적 알림 구현 : </BoldText>
    Slack Webhook API를 활용하여 클라이언트의 견적 요청을 실시간으로 팀 채널에 전달하는 시스템을 구축. 응답 시간 단축 및
    고객 서비스 품질 향상에 기여. 견적 요청부터 대응까지의 프로세스를 자동화하여 업무 효율성 50% 개선
  </li>,
  <li key="1">
    <BoldText>스팸 방지를 위한 검증 로직 구현 : </BoldText>
    Google reCAPTCHA v3를 도입하여 자동화된 봇 트래픽을 효과적으로 차단하고 견적 폼의 신뢰성을 확보. 위험 점수 기반의
    검증 로직을 구현하여 스팸 요청 90% 감소 달성
  </li>,
  <li key="2">
    <BoldText>견적서 작성 시스템 구현 : </BoldText>
    수기로 작성하던 견적서를 웹 기반 자동 계산 시스템으로 전환. 실시간 금액 계산 로직을 구현하고, PDF 다운로드 기능을
    통합하여 견적서 작성 시간을 75% 단축
  </li>,
];
