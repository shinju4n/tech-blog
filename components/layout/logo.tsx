import { FC } from "react";
import Typography from "../ui/typography";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/">
      <Typography>Ju4n Blog 🚀</Typography>
    </Link>
  );
};

export default Logo;
