import { FC } from 'react';

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <main className="flex justify-center w-full px-4">
      <section className="relative max-w-3xl h-full">{children}</section>
    </main>
  );
};

export default MainWrapper;
