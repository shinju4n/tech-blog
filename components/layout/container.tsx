import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full xl:max-w-7xl  max-h-[100dvh] overflow-y-auto scrollbar-hide">{children}</div>
    </div>
  );
};

export default Container;
