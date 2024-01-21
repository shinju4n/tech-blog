import { MenuType } from "@/types/LayoutType";
import { FC, memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Typography from "../ui/typography";

interface SidebarItemProps {
  menu: MenuType;
}
const SidebarItem: FC<SidebarItemProps> = ({ menu }) => {
  return (
    <AccordionItem value={menu.title}>
      <AccordionTrigger>
        <div className="flex gap-4 justify-start items-center">
          {menu.icon}
          <Typography size="small"> {menu.title}</Typography>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col">
          {menu.subMenus?.map((subMenu) => (
            <div key={subMenu.path} className="pl-10 p-2">
              <Typography size="small">・ {subMenu.title}</Typography>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default memo(SidebarItem);
