import React, { ComponentProps, memo } from 'react';

interface DotProps extends ComponentProps<'svg'> {
  className?: string;
}

export const Dot = memo((props: DotProps) => {
  const {
    className = '',
    height = 6,
    width = 6,
    ...rest
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 6"
      fill="currentColor"
      stroke={'currentColor'}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="5" height="5" rx="2.5" />
      <rect x="0.5" y="0.5" width="5" height="5" rx="2.5" />
    </svg>
  );
});
