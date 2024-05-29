import { cn } from '@/lib/utils';
import { FC } from 'react';

interface BadgeProps {
  label?: string;
  children?: React.ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ label, className, children }) => {
  return (
    <div
      className={cn(
        'text-sm font-bold px-2 py-1 bg-muted text-foreground tracking-wide rounded-sm min-w-[5rem] text-center whitespace-nowrap',
        'bg-background text-foreground hover:bg-foreground/10',
        className
      )}
    >
      {label}
      {children}
    </div>
  );
};

export default Badge;
