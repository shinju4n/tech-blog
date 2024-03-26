import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const GlobalContainer: FC<ContainerProps> = ({ children }) => {
  return <div className="relative w-full mx-auto mt-0 mb-10">{children}</div>;
};

export default GlobalContainer;
