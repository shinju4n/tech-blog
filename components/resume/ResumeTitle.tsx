import { FC, ReactNode } from 'react';
import Typography from '@/components/ui/typography';

const ResumeTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full bg-primary px-2 rounded-sm">
      <Typography size="h1" className="mb-7 text-primary-foreground">
        {children}
      </Typography>
    </div>
  );
};

export default ResumeTitle;
