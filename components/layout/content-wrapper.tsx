import { FC } from "react";
import Sidebar from "@/components/layout/sidebar";
interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center pb-8">
      <Sidebar />
      <section className="w-[calc(100%-300px)] max-w-[1500px]">
        {children}
      </section>
    </div>
  );
};

export default ContentWrapper;
