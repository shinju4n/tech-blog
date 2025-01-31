import { cn } from '@/lib/utils';
import { FC, memo } from 'react';

interface TypographyProps {
  size?: TypographySize;
  children: React.ReactNode;
  className?: string;
}

const Typography: FC<TypographyProps> = ({ size = 'small', className, children }) => {
  if (INCLUDE_EL.includes(size)) return <span className={cn(TYPO_STYLES[size], className)}>{children}</span>;
  return <p className={cn(TYPO_STYLES[size], className)}>{children}</p>;
};

export default memo(Typography);

const TYPO_STYLES: Record<TypographySize, string> = {
  h1: 'scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.35] mb-2',
  h2: 'scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0 leading-[1.2]',
  h3: 'scroll-m-20 text-2xl font-bold tracking-tight',
  h4: 'scroll-m-20 text-[1rem] xl:text-xl font-semibold tracking-tight',
  p: 'text-lg mb-2 leading-relaxed',
  lead: 'text-lg',
  large: 'text-xl font-semibold',
  small: 'text-sm font-medium leading-none',
  muted: 'text-sm text-muted-foreground',
  strong: 'font-bold text-foreground/90',
};

type TypographySize = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'lead' | 'large' | 'small' | 'muted' | 'strong';

const INCLUDE_EL = ['strong'];
