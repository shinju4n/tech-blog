import { FC } from 'react';
import SidebarItem from '@/components/layout/sidebar-item';
import { MenuType } from '@/types/LayoutType';
import { Accordion } from '@/components/ui/accordion';
import { ContentWriteIcon, DesktopActionMonitorIcon, VideoGameControllerIcon } from '@/components/Icons';
import { getPostCategories } from '@/service/post-service';

const Sidebar: FC = async () => {
  const categories = await getPostCategories();

  const MENUS: MenuType[] = [
    {
      key: 'posts',
      title: '포스팅',
      icon: <ContentWriteIcon />,
      subMenus: categories,
    },
    {
      key: 'lab',
      title: '실험실',
      icon: <DesktopActionMonitorIcon />,
      subMenus: [],
    },
    {
      key: 'apps',
      title: '사이드 프로젝트',
      icon: <VideoGameControllerIcon />,
      subMenus: [],
    },
  ];

  return (
    <div className="top-0 hidden lg:block py-4">
      <Accordion
        type="multiple"
        className="w-full lg:min-w-[300px] transition-all px-4 pt-14"
        defaultValue={['포스팅']}
      >
        {MENUS.map(menu => (
          <SidebarItem key={menu.title} menu={menu} />
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
