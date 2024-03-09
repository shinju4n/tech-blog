import { FC } from "react";
interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="relative flex md:justify-center items-start w-full">
      {children}
    </div>
  );
};

export default ContentWrapper;
