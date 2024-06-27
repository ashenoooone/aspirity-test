import React, { memo } from 'react';
import { cn } from '@/shared/utils';

interface SeparatorProps {
  className?: string;
}

export const Separator = memo((props: SeparatorProps) => {
  const { className = '' } = props;
  return (
    <div
      className={cn(
        'h-[1px] w-full bg-border-primary',
        className,
      )}
    />
  );
});
