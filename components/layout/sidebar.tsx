import { FC } from "react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="sticky border-r bg-blue-500 self-start pr-[50px] w-[250px] top-[70px]">
      사이드바
    </div>
  );
};

export default Sidebar;

const MENUS = [
  {
    title: "포스팅",
    subMenus: [],
  },
  {
    title: "실험실",
    subMenus: [],
  },
];
