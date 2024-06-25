import React, { ReactNode } from 'react';
import { cn } from '@/shared/utils';

interface PageProps {
  className?: string;
  children?: ReactNode;
}

export const Page = (props: PageProps) => {
  const { className = '', children } = props;
  return (
    <div
      className={cn(
        className,
        'max-w-[1920px] mx-auto flex flex-col',
      )}
    >
      {children}
    </div>
  );
};
