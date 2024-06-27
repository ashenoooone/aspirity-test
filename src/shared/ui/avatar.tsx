'use client';
import React, { memo, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/shared/utils';

export type AvatarSize =
  | '160'
  | '96'
  | '88'
  | '80'
  | '72'
  | '64'
  | '56'
  | '48'
  | '40'
  | '32'
  | '24';

interface AvatarProps extends ImageProps {
  className?: string;
  size: AvatarSize;
  fallback?: string | number;
  fallbackClassnames?: string;
  title?: string;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className = '',
    src,
    size,
    fallback = 'Image not available',
    fallbackClassnames = '',
    title,
    ...rest
  } = props;
  const [imgError, setImgError] = useState(false);

  const handleError = () => setImgError(true);

  const sizeClasses = {
    '160': 'w-40 h-40',
    '96': 'w-24 h-24',
    '88': 'w-22 h-22',
    '80': 'w-20 h-20',
    '72': 'w-18 h-18',
    '64': 'w-16 h-16',
    '56': 'w-14 h-14',
    '48': 'w-12 h-12',
    '40': 'w-10 h-10',
    '32': 'w-8 h-8',
    '24': 'w-6 h-6',
  };

  return (
    <div
      title={title}
      className={cn(
        'relative flex-shrink-0 rounded-full',
        sizeClasses[size],
        className,
      )}
    >
      {!imgError ? (
        <Image
          src={src}
          onError={handleError}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          {...rest}
        />
      ) : (
        <div
          className={cn(
            'flex rounded-full items-center justify-center w-full h-full bg-gray-200 text-gray-500 text-sm',
            fallbackClassnames,
          )}
        >
          {fallback}
        </div>
      )}
    </div>
  );
});

export default Avatar;
