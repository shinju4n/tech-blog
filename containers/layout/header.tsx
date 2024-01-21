import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="sticky w-full flex justify-between items-center h-12 border-b bg-background top-0 px-8">
      <div>로고</div>
      <div>검색</div>
      <div>다크모드</div>
    </div>
  );
};

export default Header;
