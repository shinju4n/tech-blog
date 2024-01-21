import { ReactNode } from "react";

export type MenuType = {
  title: string;
  icon: ReactNode;
  subMenus: SubMenuType[];
};

export type SubMenuType = {
  title: string;
  path: string;
};
