import { FC } from "react";
import SidebarItem from "@/components/layout/sidebar-item";
import { MenuType } from "@/types/LayoutType";
import { Accordion } from "@/components/ui/accordion";
import {
  ContentWriteIcon,
  DesktopActionMonitorIcon,
  VideoGameControllerIcon,
} from "@/components/Icons";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="sticky py-4 top-0 hidden lg:block">
      <Accordion
        type="multiple"
        className="w-full px-4 lg:min-w-[300px] transition-all"
      >
        {MENUS.map((menu) => (
          <SidebarItem key={menu.title} menu={menu} />
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;

const MENUS: MenuType[] = [
  {
    key: "posts",
    title: "포스팅",
    icon: <ContentWriteIcon />,
    subMenus: [
      { key: "FE", title: "프론트엔드 (FE)" },
      { key: "BE", title: "백엔드 (BE)" },
    ],
  },
  {
    key: "lab",
    title: "실험실",
    icon: <DesktopActionMonitorIcon />,
    subMenus: [],
  },
  {
    key: "apps",
    title: "사이드 프로젝트",
    icon: <VideoGameControllerIcon />,
    subMenus: [],
  },
];
