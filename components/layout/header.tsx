import Logo from "@/components/layout/logo";
import MobileMenu from "@/components/layout/mobile-menu";
import ThemeToggle from "@/components/layout/theme-toggle";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div
      className="absolute flex justify-between items-center w-full h-14 border-b border-foreground/20 backdrop-blur-sm
    bg-background/70 top-0 px-8 z-50"
    >
      <Logo />
      <MobileMenu />
      <ThemeToggle />
    </div>
  );
};

export default Header;
