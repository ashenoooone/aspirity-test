import React, { ComponentProps, memo } from 'react';

interface OkProps extends ComponentProps<'svg'> {
  className?: string;
}

export const Ok = memo((props: OkProps) => {
  const {
    className = '',
    width = 18,
    height = 14,
    ...rest
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7071 0.292893C18.0976 0.683418 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683418 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z"
      />
    </svg>
  );
});
