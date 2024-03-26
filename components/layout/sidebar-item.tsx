'use client';
import { MenuType } from '@/types/LayoutType';
import { type FC, memo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Typography from '@/components/ui/typography';

import { EllipsisIcon } from '@/components/Icons';

import { cn } from '@/lib/utils';

interface SidebarItemProps {
  menu: MenuType;
}
const SidebarItem: FC<SidebarItemProps> = ({ menu }) => {
  const query = useSearchParams();
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
          {menu.subMenus?.map(subMenu => (
            <div key={subMenu} className="pl-10 p-2">
              <Link
                href={`/${menu.key}?category=${subMenu}`}
                className={cn(
                  'flex items-center gap-2 p-2',
                  query.get('category') === subMenu && 'rounded-lg ring-1 ring-foreground/90'
                )}
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
