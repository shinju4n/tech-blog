import ThemeToggle from "@/components/layout/theme-toggle";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="sticky w-full flex justify-between items-center h-12 border-b border-foreground/20 bg-background top-0 px-8">
      <div>로고</div>
      <div>검색</div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
