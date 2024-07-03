import { FC, ReactNode } from 'react';

const BoldText: FC<{ children: ReactNode }> = ({ children }) => <span className="font-bold">{children}</span>;

export default BoldText;
