import { FC } from "react";

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <main className="flex justify-center w-full overflow-y-scroll max-h-[100dvh] px-4 pt-14 scrollbar-hide">
      <section className="py-6">{children}</section>
    </main>
  );
};

export default MainWrapper;
