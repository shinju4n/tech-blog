import { FC } from "react";
import Sidebar from "@/containers/layout/sidebar";
interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="w-full flex md:justify-center px-6">
      <Sidebar />
      <div className="relative flex justify-center w-full px-4 py-6">
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
