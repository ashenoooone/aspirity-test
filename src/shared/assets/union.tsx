import React, { ComponentProps, memo } from 'react';

interface UnionProps extends ComponentProps<'svg'> {
  className?: string;
}

export const Union = memo((props: UnionProps) => {
  const {
    className = '',
    width = 18,
    height = 14,
    color,
    ...rest
  } = props;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 18 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L14.5858 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H14.5858L10.2929 1.70711C9.90237 1.31658 9.90237 0.683417 10.2929 0.292893Z"
      />
    </svg>
  );
});
