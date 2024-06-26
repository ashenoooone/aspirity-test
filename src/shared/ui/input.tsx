import React, {
  ComponentProps,
  forwardRef,
  memo,
} from 'react';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;

interface InputProps extends ComponentProps<'input'> {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const {
    className = '',
    type,
    label,
    icon,
    value,
    ...rest
  } = props;

  return (
    <div className={cn('relative w-full', className)}>
      <input
        value={value}
        ref={ref}
        className={cn(
          'disabled:opacity-[32%] disabled:pointer-events-none peer w-full text-text-secondary text-body-2 leading-body-2 font-medium bg-transparent hover:border-icon-secondary rounded-[4px] outline-none border border-border-primary',
          {
            'px-[14px] py-[8px]': icon === undefined,
          },
        )}
        type={type}
        {...rest}
      />
      {/*todo сделать состояние фокусед*/}
      {label && (
        <Typography
          className={cn(
            'peer-disabled:opacity-[32%] transition-all px-[4px] text-text-secondary peer-active:top-0 peer-focus:top-0 font-medium absolute top-1/2 -translate-y-1/2 bg-bg',
            {
              'top-0': Boolean(value),
              'left-[10px]': icon === undefined,
            },
          )}
          variant={'caption'}
        >
          {label}
        </Typography>
      )}
    </div>
  );
});
