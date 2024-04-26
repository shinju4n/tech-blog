import Typography from '@/components/ui/typography';
import { FC } from 'react';

const FrontEnd: FC = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4">
        <Typography size="h3">Front-end</Typography>
      </div>
      <ul className="pl-4 list-disc flex flex-col gap-1">
        <li>
          Next.js 13(appDir)을 능숙하게 사용 할 줄 압니다. 프로젝트의 처음부터 끝까지 개발하고 운영해본 경험이 있습니다.
        </li>
        <li>공통으로 사용하는 코드를 Custom Hook으로 만들어 코드의 재사용성을 높입니다.</li>
        <li>
          React 생태계의 최신 기술에 관심이 많고, TanStack Query, SWR, Recoil을 활용할 줄 알고, 이를 능숙하게 다루기
          위해 지속적으로 탐구하고 있습니다.
        </li>
        <li>TypeScript를 이용한 React 개발에 익숙합니다.</li>
        <li>
          웹 표준 성능에 큰 관심을 가지고 있으며, 최신 기술과 방법론을 통해 웹 페이지의 로딩 속도, 사용자 경험 및 성능을
          최적화할 수 있습니다.
        </li>
        <li>Thymeleaf와 jQuery를 실무에서 사용해본 경험이 있습니다.</li>
      </ul>
    </div>
  );
};
export default FrontEnd;
