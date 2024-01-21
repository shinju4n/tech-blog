import { MenuType } from "@/types/LayoutType";
import { FC, memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SidebarItemProps {
  menu: MenuType;
}
const SidebarItem: FC<SidebarItemProps> = ({ menu }) => {
  return (
    <AccordionItem value={menu.title}>
      <AccordionTrigger>{menu.title}</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  );
};

export default memo(SidebarItem);
