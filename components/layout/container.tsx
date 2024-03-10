import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full lg:max-w-xl xl:max-w-7xl  max-h-[100dvh] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Container;
