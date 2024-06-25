import {
  cva,
  type VariantProps,
} from 'class-variance-authority';
import React from 'react';
import { cn } from '../utils';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      'custom-headline':
        'text-custom-headline leading-custom-headline',
      'title-3': 'text-title-3 leading-title-3',
      h1: 'text-h1 leading-h1',
      h2: 'text-h2 leading-h2',
      h3: 'text-h3 leading-h3',
      h4: 'text-h4 leading-h4',
      h5: 'text-h5 leading-h5',
      h6: 'text-h6 leading-h6',
      'subtitle-1': 'text-subtitle-1 leading-subtitle-1',
      'subtitle-2': 'text-subtitle-2 leading-subtitle-2',
      'body-1': 'text-body-1 leading-body-1',
      'body-2': 'text-body-2 leading-body-2',
      button: 'text-button leading-button',
      caption: 'text-caption leading-caption',
      overline: 'text-overline leading-overline',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export const Typography = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps
>(({ className, variant, tag, ...props }, ref) => {
  const Comp = tag || 'p';
  return (
    <Comp
      className={cn(
        '',
        typographyVariants({ variant, className }),
      )}
      ref={ref}
      {...props}
    />
  );
});

Typography.displayName = 'H1';
