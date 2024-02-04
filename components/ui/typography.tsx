import { cn } from "@/lib/utils";
import { FC, memo } from "react";

interface TypographyProps {
  size?: TypographySize;
  children: React.ReactNode;
  className?: string;
}

const Typography: FC<TypographyProps> = ({
  size = "small",
  className,
  children,
}) => {
  return (
    <p className={cn(TYPO_STYLES[size], className, "leading")}>{children}</p>
  );
};

export default memo(Typography);

const TYPO_STYLES: Record<TypographySize, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-tight",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
};

type TypographySize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "lead"
  | "large"
  | "small"
  | "muted";
