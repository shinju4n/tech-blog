import { FC } from "react";

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return <div className="relative w-full h-[100dvh]">{children}</div>;
};

export default MainWrapper;
