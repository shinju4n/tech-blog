export type MenuType = {
  title: string;
  subMenus: SubMenuType[];
};

export type SubMenuType = {
  title: string;
  path: string;
};
