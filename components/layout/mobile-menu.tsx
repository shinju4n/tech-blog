import { type FC } from "react";
import Link from "next/link";
import { getPostCategories } from "@/service/post-service";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Typography from "@/components/ui/typography";
import {
  ContentWriteIcon,
  DesktopActionMonitorIcon,
  MenuNavigationIcon,
  VideoGameControllerIcon,
} from "@/components/Icons";

import { type MenuType } from "@/types/LayoutType";

const MobileMenu: FC = async () => {
  const categories = await getPostCategories();
  const MENUS: MenuType[] = [
    {
      key: "posts",
      title: "포스팅",
      icon: <ContentWriteIcon />,
      subMenus: categories,
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
  return (
    <Sheet>
      <SheetTrigger className="block lg:hidden outline-none order-1">
        <MenuNavigationIcon />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="py-10">
          <Accordion
            type="multiple"
            className="w-full px-4 lg:min-w-[300px] xl:min-w-[350px] transition-all outline-none"
          >
            {MENUS.map((menu) => (
              <AccordionItem
                key={menu.key}
                value={menu.title}
                className="outline-none"
              >
                <AccordionTrigger>
                  <div className="flex gap-4 justify-start items-center">
                    {menu.icon}
                    <Typography size="small"> {menu.title}</Typography>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col">
                    {menu.subMenus?.map((subMenu) => (
                      <div key={subMenu} className="pl-10 p-2">
                        <Link href={`/${menu.key}?category=${subMenu}`}>
                          <SheetTrigger>
                            <Typography size="small">・ {subMenu}</Typography>
                          </SheetTrigger>
                        </Link>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
