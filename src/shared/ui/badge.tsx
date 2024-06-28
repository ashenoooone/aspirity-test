import React, { memo, ReactNode } from 'react';
import { cn } from '@/shared/utils';

type BadgeVariant = 'blue' | 'orange';
interface BadgeProps {
  className?: string;
  children?: ReactNode;
  variant?: BadgeVariant;
}

export const Badge = memo((props: BadgeProps) => {
  const {
    className = '',
    variant = 'blue',
    children,
  } = props;
  return (
    <div
      className={cn(
        'px-2 text-subtitle-1 leading-subtitle-1 rounded-[8px] cursor-default',
        {
          'bg-blue/10 text-blue w-max': variant === 'blue',
          'bg-orange/10 text-orange w-max':
            variant === 'orange',
        },
        className,
      )}
    >
      {children}
    </div>
  );
});
