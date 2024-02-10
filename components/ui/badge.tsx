import { cn } from "@/lib/utils";
import { FC } from "react";

interface BadgeProps {
  label?: string;
  children?: React.ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ label, className, children }) => {
  return (
    <div
      className={cn(
        "text-sm font-bold px-2 py-1 bg-foreground/10 text-foreground rounded-md min-w-[5rem] text-center",
        className
      )}
    >
      {label && "#" + label?.toLocaleUpperCase()}
      {children}
    </div>
  );
};

export default Badge;
