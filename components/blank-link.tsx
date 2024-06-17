import { FC, ReactNode } from 'react';
import Link from 'next/link';

const BlankLink: FC<{ href: string; children: ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href} target="_blank" className="inline">
      <span className="text-primary dark:text-cyan-500 transition-colors hover:text-cyan-500 dark:hover:text-cyan-300 font-bold underline">
        {children}
      </span>
    </Link>
  );
};

export default BlankLink;
