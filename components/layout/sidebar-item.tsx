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
          <Typography size="small">{menu.title}</Typography>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  );
};

export default memo(SidebarItem);
