import { FC, ReactNode } from 'react';
import Typography from '@/components/ui/typography';

const ResumeTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Typography size="h1" className="mb-7">
      {children}
    </Typography>
  );
};

export default ResumeTitle;
