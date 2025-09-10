import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

const BoldText: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => <span className={cn("font-bold", className)}>{children}</span>;

export default BoldText;
