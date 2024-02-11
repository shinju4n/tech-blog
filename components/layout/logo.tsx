import { FC } from "react";
import Typography from "../ui/typography";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/" className="gap-2 hidden lg:block">
      <Typography>Ju4n Blog 🚀</Typography>
    </Link>
  );
};

export default Logo;
