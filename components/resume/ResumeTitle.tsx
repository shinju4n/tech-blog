import { FC, ReactNode } from 'react';
import Typography from '@/components/ui/typography';

const ResumeTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full bg-primary pl-1">
      <Typography size="h1" className="mb-7">
        {children}
      </Typography>
    </div>
  );
};

export default ResumeTitle;
