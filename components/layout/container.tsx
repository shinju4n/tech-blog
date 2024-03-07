import exp from "constants";
import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative h-[100dvh] overflow-y-scroll scrollbar-hide">
      {children}
    </div>
  );
};

export default Container;
