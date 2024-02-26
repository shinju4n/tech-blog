import { FC } from "react";
import Typography from "../ui/typography";
import Link from "next/link";
import { ProgrammerIcon } from "../Icons";

const Logo: FC = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <ProgrammerIcon size={30} className="fill-foreground" />
        <Typography className="hidden lg:block">주안 블로그</Typography>
      </div>
    </Link>
  );
};

export default Logo;
