import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { FC } from "react";

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full !h-max  rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          {children}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MainWrapper;
