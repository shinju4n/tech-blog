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
            <li>회원 정보 수정, 이벤트 관리, 상품 등록 등 업무용 API 개발</li>
            <li>회원 목록, 포스팅 검수, 이벤트 관리 등의 업무에 필요한 리스트 화면 개발</li>
            <li>
              일자별 매출, 회원 수 등락, 등급별 유저 현황 등을 기존 수치로만 보여주던 부분에서 시각화 차트 도입하여
              한눈에 등락을 파악 할 수 있도록 UI/UX 개선
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
