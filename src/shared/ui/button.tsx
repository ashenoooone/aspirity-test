import React, { ComponentProps, memo } from 'react';
import { cn } from '@/shared/utils';
import {
  cva,
  VariantProps,
} from 'class-variance-authority';

export const buttonVariants = cva(
  'text-button transition flex items-center justify-center leading-button uppercase px-[16px] py-[10px] rounded-[4px]',
  {
    variants: {
      variant: {
        default:
          'text-text-primary bg-bg-accent hover:bg-state-blue-hover focus:bg-state-blue-focused disabled:bg-state-accent-disabled',
        outline: '',
        transparent:
          'text-text-accent hover:bg-state-transparent-blue-hover focus:bg-state-transparent-blue-focused disabled:text-dark-text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className = '',
    children,
    type = 'button',
    variant = 'default',
    ...rest
  } = props;
  return (
    <button
      type={type}
      className={cn(className, buttonVariants({ variant }))}
      {...rest}
    >
      {children}
    </button>
  );
});
