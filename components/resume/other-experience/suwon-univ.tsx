import Typography from '@/components/ui/typography';
import { FC } from 'react';

const SuwonUniv: FC = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4">
        <Typography size="h3">수원대학교</Typography>
        <Typography size="lead">운동건강관리학과</Typography>
        <Typography size="muted">2015.03 ~ 2021.02</Typography>
      </div>
      <Typography size="p">
        수원대학교에서 운동건강관리학과를 전공하였습니다. 2016년에는 학생회, 2020년에는 체육대학 부학생회장을 역임하며
        학생들의 의견을 수렴하여 학교와 학생들의 소통을 원활하게 하였습니다.
      </Typography>
    </div>
  );
};
export default SuwonUniv;
