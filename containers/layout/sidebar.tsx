import { FC } from "react";
import SidebarItem from "@/components/layout/sidebar-item";
import { MenuType } from "@/types/LayoutType";
import { Accordion } from "@/components/ui/accordion";
import { IdCardIcon, MagicWandIcon } from "@radix-ui/react-icons";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="sticky self-start w-[250px] top-[70px] hidden md:block">
      <Accordion type="multiple" className="w-full">
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
    icon: <IdCardIcon />,
    subMenus: [
      { key: "FE", title: "프론트엔드 (FE)" },
      { key: "BE", title: "백엔드 (BE)" },
    ],
  },
  {
    key: "lab",
    title: "실험실",
    icon: <MagicWandIcon />,
    subMenus: [],
  },
];
