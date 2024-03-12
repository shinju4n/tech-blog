import { FC } from "react";

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <main className="flex justify-center w-max overflow-y-scroll max-h-[100dvh] px-4 pt-14 scrollbar-hide">
      <section className="w-full xl:max-w-5xl ">{children}</section>
    </main>
  );
};

export default MainWrapper;
