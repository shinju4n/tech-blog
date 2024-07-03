import { FC } from 'react';
import { Layout } from '../Layout';
import BoldText from '@/components/bold-text';

const WantMore: FC = () => {
  return (
    <Layout>
      <Layout.ProjectTitle title="원트모어 WantMore" subTitle="2023.04 ~ 2024.05 (프론트엔드 기여도 20%)" />
      <Layout.InnerContainer>
        <Layout.Content type="Description">포스팅 커머스 플랫폼</Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList list={WORK_LIST} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">Next.js 12, TypeScript, Tailwind CSS</Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};

export default WantMore;

const WORK_LIST = [
  <li key="1">
    <BoldText>이미지 업로드 모듈 개선 : </BoldText>
    이미지 업로드 모듈의 편의성을 개선하였습니다. 사용자가 여러 장의 이미지를 등록한 후 수정할 때, 순서를 원하는 대로
    지정할 수 있도록 이미지에 인덱스 기능을 추가하고, 체크박스 선택 여부에 따라 순서를 자유롭게 조정할 수 있게 하여{' '}
    사용자 경험 개선 하였습니다.
  </li>,
  <li key="2">
    <BoldText>인턴 멘토링 및 팀 협업 경험 : </BoldText>
    인턴 두 분과 함께 멘토로서 프로젝트를 수행하며 효과적인 팀 협업을 경험했습니다. 모르는 부분에 대해 적극적으로
    공유하고, 코드 리뷰를 통해 코드를 개선하고 향상시켰습니다.
  </li>,
];
