import Logo from '@/components/layout/logo';
import ThemeToggle from '@/components/layout/theme-toggle';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <div
      className="sticky flex justify-between items-center w-full h-14 border-b border-foreground/20 backdrop-blur-sm
    bg-background/70 top-0 px-8 z-50"
    >
      <Logo />
      <ThemeToggle />
    </div>
  );
};

export default Header;
