import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative max-h-[100dvh] overflow-hidden">{children}</div>
  );
};

export default Container;
