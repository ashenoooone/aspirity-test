'use client';
import React, { memo, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/shared/utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

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

type OmitedImageProps = Omit<ImageProps, 'src'>;

interface AvatarProps extends OmitedImageProps {
  className?: string;
  size: AvatarSize;
  fallback?: string | number;
  fallbackClassnames?: string;
  title?: string;
  src?: string | StaticImport;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className = '',
    src,
    size,
    fallback = 'Image not available',
    fallbackClassnames = '',
    title,
    onClick,
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
      onClick={onClick}
      title={title}
      className={cn(
        'relative flex-shrink-0 rounded-full',
        sizeClasses[size],
        className,
      )}
    >
      {!imgError && src !== undefined ? (
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
