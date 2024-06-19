import { FC } from 'react';
import { Layout } from '../Layout';

const Inflca: FC = () => {
  return (
    <Layout>
      <Layout.ProjectTitle title="인플카 Inflca" subTitle="2022.11 ~ 2023.11 (풀스택 개발)" />
      <Layout.InnerContainer>
        <Layout.Content type="Description">포스팅 커머스 플랫폼</Layout.Content>
        <Layout.Content type="Work">
          <Layout.WorkList list={WORK_LIST} />
        </Layout.Content>
        <Layout.Content type="Tech Stack">Spring Boot, Thymeleaf, jQuery, JPA, Mybatis, Bootstrap</Layout.Content>
      </Layout.InnerContainer>
    </Layout>
  );
};

export default Inflca;

const WORK_LIST = [
  <li key="1">프로젝트 전반의 웹 퍼블리싱을 담당하여, 디자인 시안에 맞춰 모든 페이지를 구현하였습니다.</li>,
  <li key="2">
    회원 정보 수정, 이벤트 관리, 상품 등록 등을 위한 업무용 API를 개발하여 내부 운영 효율성을 높였습니다.
  </li>,
  <li key="3">
    회원 목록, 포스팅 검수, 이벤트 관리 등의 업무에 필요한 리스트 화면을 개발하여 관리자들이 쉽게 데이터를 관리하고
    모니터링할 수 있도록 하였습니다.
  </li>,
  <li key="4">
    일자별 매출, 회원 수 등락, 등급별 유저 현황 등을 기존 수치로만 보여주던 부분에서 시각화 차트 도입하여 한눈에 파악할
    수 있도록 UI/UX 개선하였습니다. 이를 통해 관리자들이 데이터를 더 쉽게 이해하고, 빠르게 의사 결정을 할 수 있도록
    지원하였습니다.
  </li>,
];
