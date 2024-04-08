import { FC, ReactNode } from 'react';

const Strong: FC<{ children: ReactNode }> = ({ children }) => {
  return <span className="font-semibold bg-primary text-white px-1">{children}</span>;
};

export default Strong;
