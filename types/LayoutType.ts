import { ReactNode } from "react";

export type MenuType = {
  key: string;
  title: string;
  icon: ReactNode;
  subMenus: string[];
};
