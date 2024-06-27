import React, { ComponentProps, memo } from 'react';
import { cn } from '@/shared/utils';
import {
  cva,
  VariantProps,
} from 'class-variance-authority';

export const buttonVariants = cva(
  'text-button font-semibold transition flex items-center justify-center leading-button uppercase px-[16px] py-[10px] rounded-[4px]',
  {
    variants: {
      variant: {
        icon: 'p-0 hover:opacity-80',
        transparent_alternative:
          'text-text-tertiary hover:text-text-secondary normal-case',
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
      className={cn(buttonVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </button>
  );
});
