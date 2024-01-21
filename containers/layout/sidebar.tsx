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
    title: "포스팅",
    icon: <IdCardIcon />,
    subMenus: [
      { title: "FE", path: "/posts/fe" },
      { title: "BE", path: "/posts/be" },
    ],
  },
  {
    title: "실험실",
    icon: <MagicWandIcon />,
    subMenus: [],
  },
];
