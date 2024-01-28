import { FC } from "react";
import Sidebar from "@/containers/layout/sidebar";
interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="w-full flex md:justify-center p-2 md:py-8">
      <Sidebar />
      <section className="w-full md:w-[calc(100%-300px)] p-2 md:px-7">
        <div className="relative">{children}</div>
      </section>
    </div>
  );
};

export default ContentWrapper;
