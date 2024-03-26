import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const GlobalContainer: FC<ContainerProps> = ({ children }) => {
  return <div className="relative w-full mx-auto my-0">{children}</div>;
};

export default GlobalContainer;
