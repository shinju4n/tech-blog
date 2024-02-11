import { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  FaceIcon,
  HamburgerMenuIcon,
  IdCardIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import { MenuType } from "@/types/LayoutType";
import SidebarItem from "./sidebar-item";
import { Accordion } from "../ui/accordion";

const MobileMenu: FC = () => {
  return (
    <Sheet>
      <SheetTrigger className="block lg:hidden">
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="py-10">
          <Accordion
            type="multiple"
            className="w-full px-4 lg:min-w-[300px] xl:min-w-[350px] transition-all"
          >
            {MENUS.map((menu) => (
              <SidebarItem key={menu.title} menu={menu} />
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;

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
  {
    key: "apps",
    title: "사이드 프로젝트",
    icon: <FaceIcon />,
    subMenus: [],
  },
];
