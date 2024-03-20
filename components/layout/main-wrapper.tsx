import { FC } from 'react';

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <main className="flex justify-center w-full px-4 ">
      <section className="w-full xl:max-w-5xl ">{children}</section>
    </main>
  );
};

export default MainWrapper;
