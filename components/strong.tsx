import { FC, ReactNode } from 'react';

const Strong: FC<{ children: ReactNode }> = ({ children }) => {
  return <span className="font-bold bg-primary text-primary-foreground px-1 py-[0.2rem]">{children}</span>;
};

export default Strong;
