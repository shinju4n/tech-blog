import { FC, ReactNode } from 'react';
import Link from 'next/link';

const BlankLink: FC<{ href: string; children: ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href} target="_blank">
      <span className="text-primary transition-colors hover:text-cyan-600">{children}</span>
    </Link>
  );
};

export default BlankLink;
