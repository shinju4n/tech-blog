import { FC } from "react";
import Sidebar from "@/containers/layout/sidebar";
interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="relative w-full flex md:justify-center items-star px-6">
      {children}
    </div>
  );
};

export default ContentWrapper;
