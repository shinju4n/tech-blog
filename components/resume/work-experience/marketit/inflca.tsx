import { FC } from 'react';
import Typography from '@/components/ui/typography';

const Inflca: FC = () => {
  return (
    <section>
      <Typography size="h3">인플카 Inflca</Typography>
      <Typography size="muted">2022.11 ~ 2023.11 (풀스택 개발)</Typography>
      <div className="flex flex-col gap-4 pt-4">
        <div>
          <Typography size="large" className="font-bold">
            Description.
          </Typography>
          <Typography size="p">포스팅 커머스 플랫폼</Typography>
        </div>
        <div>
          <Typography size="large" className="font-bold">
            Work.
          </Typography>
          <ul className="pl-4 list-disc flex flex-col gap-1">
            <li>프로젝트 전반의 웹 퍼블리싱을 담당하여, 디자인 시안에 맞춰 모든 페이지를 구현하였습니다.</li>
            <li>
              회원 정보 수정, 이벤트 관리, 상품 등록 등을 위한 업무용 API를 개발하여 내부 운영 효율성을 높였습니다.
            </li>
            <li>
              회원 목록, 포스팅 검수, 이벤트 관리 등의 업무에 필요한 리스트 화면을 개발하여 관리자들이 쉽게 데이터를
              관리하고 모니터링할 수 있도록 하였습니다.
            </li>
            <li>
              일자별 매출, 회원 수 등락, 등급별 유저 현황 등을 기존 수치로만 보여주던 부분에서 시각화 차트 도입하여
              한눈에 파악할 수 있도록 UI/UX 개선하였습니다. 이를 통해 관리자들이 데이터를 더 쉽게 이해하고, 빠르게 의사
              결정을 할 수 있도록 지원하였습니다.
            </li>
          </ul>
        </div>
        <div>
          <Typography size="large" className="font-bold">
            Tech Stack.
          </Typography>
          <Typography size="p">Spring Boot, Thymeleaf, jQuery, JPA, Mybatis, Bootstrap</Typography>
        </div>
      </div>
    </section>
  );
};

export default Inflca;
