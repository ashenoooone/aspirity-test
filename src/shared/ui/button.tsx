import React, { ComponentProps, memo } from 'react';
import { cn } from '@/shared/utils';

interface ButtonProps extends ComponentProps<'button'> {
  className?: string;
  children?: React.ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className = '',
    children,
    type = 'button',
    ...rest
  } = props;
  return (
    <button
      type={type}
      className={cn(
        className,
        'text-button leading-button uppercase text-text-primary px-[16px] py-[10px] rounded-[4px] bg-bg-accent hover:bg-state-blue-hover focus:bg-state-blue-focused disabled:bg-state-accent-disabled',
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
