import { FC } from 'react';
import BlankLink from '@/components/blank-link';
import { Layout } from '../Layout';
import BoldText from '@/components/bold-text';

const Caddy: FC = () => {
  return (
    <Layout>
      <Layout.ProjectTitle title="캐디 Caddy" subTitle="2023.11 ~ 2024.03 (프론트엔드 1인 개발)" />
      <Layout.InnerContainer>
        <Layout.Content type="Description">
          실제 인물 이미지를 AI 인플루언서 이미지로 변환하는 B2B 서비스
        </Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList list={WORK_LIST} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">Next.js 13, TypeScript, Tailwind CSS, TanStack Query, Recoil</Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};

export default Caddy;

const LINKS = {
  '초기 페이지 로딩 속도 개선':
    'https://www.notion.so/shinju4n/Portfolio-682dfc806a804f1f916de972143820bc?pvs=4#f381e7096147466ea417bba82c3e7f7a',
  '시간이 오래걸리는 AI 이미지 생성 시 사용자 경험 개선':
    'https://www.notion.so/shinju4n/Portfolio-1-fdf9319b388a4bc3ae8eecd774143d55?pvs=4#d7497077de754082a8d054eeeee9e83b',
  '사용자를 위한 데이터 시각화 차트 개발':
    'https://www.notion.so/shinju4n/Portfolio-1-fdf9319b388a4bc3ae8eecd774143d55?pvs=4#b05d64750fc24cea936a8a019d79aec9',
  '링크 공유 시 필터링 조건 유지 기능 구현':
    'https://www.notion.so/shinju4n/Portfolio-1-fdf9319b388a4bc3ae8eecd774143d55?pvs=4#dda1bda3ac97421db6ef03c70b6dded3',
  '크레딧 및 멤버십 결제 기능 구현':
    'https://www.notion.so/shinju4n/Portfolio-1-fdf9319b388a4bc3ae8eecd774143d55?pvs=4#bb88225eb636453eaa5d948d7fbb58c7',
};

const WORK_LIST = [
  <li key="0">
    <BoldText>초기 페이지 로딩 속도 개선 : </BoldText> 초기 화면에 고해상도 이미지로 인해 로드 시간이 느려지는 문제를
    해결하기 위해, next/image 컴포넌트를 사용하여 AVIF와 WebP 형식으로 이미지를 최적화하고, lazy loading과 priority
    속성을 적용하여{' '}
    <BlankLink href={LINKS['초기 페이지 로딩 속도 개선']}>초기 페이지 로드 시간을 약 4초에서 0.97초로 개선</BlankLink>
    하였습니다.
  </li>,
  <li key="1">
    <BoldText>시간이 오래걸리는 AI 이미지 생성 시 사용자 경험 개선 : </BoldText>
    로딩 화면이 오래 지속되는 문제로 인한 사용자 경험 저하를 해결하기 위해 API 호출 로직을 수정하여 실시간으로 이미지를
    생성하고 사용자에게 지속적으로 업데이트를 제공함으로써{' '}
    <BlankLink href={LINKS['시간이 오래걸리는 AI 이미지 생성 시 사용자 경험 개선']}>사용자 경험을 개선</BlankLink>
    하였습니다.
  </li>,
  <li key="4">
    <BoldText>사용자를 위한 데이트 시각화 차트 개발 : </BoldText>
    인플루언서의 팔로워 수 등락을 시각적으로 표현하기 위해 ApexCharts.js 라이브러리를 도입하여{' '}
    <BlankLink href={LINKS['사용자를 위한 데이터 시각화 차트 개발']}>데이터 시각화를 위한 차트를 개발</BlankLink>
    하였습니다. 이를 통해 사용자들이 데이터를 더 쉽게 이해하고 분석할 수 있게 하였습니다.
  </li>,
  <li key="5">
    <BoldText>링크 공유 시 필터링 조건 유지 기능 구현 : </BoldText>
    기존 상태 관리 방식을 개선하여{' '}
    <BlankLink href={LINKS['링크 공유 시 필터링 조건 유지 기능 구현']}>
      쿼리 파라미터를 활용한 URL 필터링 기능을 구현하고, 재사용 가능한 useQueryParams 커스텀 훅을 개발
    </BlankLink>
    하여 팀 간 협업과 코드 유지보수성을 향상시켰습니다.
  </li>,
  <li key="7">
    <BoldText>크레딧 및 멤버십 결제 기능 구현 : </BoldText>
    포트원 모듈을 사용하여{' '}
    <BlankLink href={LINKS['크레딧 및 멤버십 결제 기능 구현']}>구매 정책을 위한 결제 기능 구현</BlankLink>
    하였습니다. 이를 통해 안전하고 편리한 결제 시스템을 구축하였습니다.
  </li>,
];
