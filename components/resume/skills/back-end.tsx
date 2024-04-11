import Typography from '@/components/ui/typography';
import { FC } from 'react';

const BackEnd: FC = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4">
        <Typography size="h3">BackEnd</Typography>
      </div>
      <ul className="pl-4 list-disc flex flex-col gap-1">
        <li>Spring Boot, JPA, QueryDSL을 사용하여 CRUD API를 개발한 경험이 있습니다.</li>
      </ul>
    </div>
  );
};
export default BackEnd;
