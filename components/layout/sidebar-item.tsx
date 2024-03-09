import { MenuType } from "@/types/LayoutType";
import { FC, memo } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Typography from "../ui/typography";
import Link from "next/link";
import { EllipsisIcon } from "../Icons";

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
            <div key={subMenu} className="pl-10 p-2">
              <Link
                href={`/${menu.key}?category=${subMenu}`}
                className="flex items-center gap-2"
              >
                <EllipsisIcon size={8} />
                <Typography size="small">{subMenu}</Typography>
              </Link>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default memo(SidebarItem);
