import { FC } from "react";
import Typography from "../ui/typography";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/" className="flex gap-2">
      <Typography className="hidden md:block">Ju4n Blog</Typography>
      <Typography>🚀</Typography>
    </Link>
  );
};

export default Logo;
