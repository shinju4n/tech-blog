import { type FC } from "react";

interface HeaderWrapperProps {
  children: React.ReactNode;
}
const HeaderWrapper: FC<HeaderWrapperProps> = ({ children }) => {
  return <div className="bg-background h-11 p-2 border-b">{children}</div>;
};

export default HeaderWrapper;
