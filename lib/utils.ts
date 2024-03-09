import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const setScrollPosition = () => {
  sessionStorage.setItem("scrollPosition", window.scrollY.toString());
};
