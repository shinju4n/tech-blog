import { FC, ReactNode } from 'react';

const Strong: FC<{ children: ReactNode }> = ({ children }) => {
  return <span className="font-bold bg-primary text-primary-foreground px-0.5">{children}</span>;
};

export default Strong;
