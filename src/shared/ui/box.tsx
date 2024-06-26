import React, { ReactNode } from 'react';
import { cn } from '@/shared/utils';

interface BoxProps {
  className?: string;
  children?: ReactNode;
}

export const Box = (props: BoxProps) => {
  const { className = '', children } = props;
  return (
    <div
      className={cn(
        'p-2 rounded-[12px] bg-[#232324]',
        className,
      )}
    >
      {children}
    </div>
  );
};
