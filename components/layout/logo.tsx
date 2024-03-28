import { FC } from 'react';
import Typography from '../ui/typography';
import Link from 'next/link';
import { ProgrammerIcon } from '../Icons';

const Logo: FC = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 transition-colors fill-foreground hover:fill-primary hover:text-primary text-foreground">
        <ProgrammerIcon size={30} className="" />
        <Typography className="font-bold">{'<Ju4n_Devlog/>'}</Typography>
      </div>
    </Link>
  );
};

export default Logo;
