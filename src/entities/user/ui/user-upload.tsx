import React, { memo } from 'react';
import { Box } from '@/shared/ui/box';
import { UserUpload as TUserUpload } from '../types';
import { Typography } from '@/shared/ui/typography';
import { cn } from '@/shared/utils';
interface UserUploadProps {
  className?: string;
  userUpload: TUserUpload;
}

export const UserUpload = memo((props: UserUploadProps) => {
  const { className = '', userUpload } = props;
  return (
    <Box className={cn(className, 'p-[30px]')}>
      <div className={'flex justify-between items-center'}>
        <Typography variant={'h5'} tag={'h5'}>
          Загрузка сотрудника
        </Typography>
        <Typography
          variant={'body-2'}
          className={cn({
            'text-[#D77556]':
              userUpload['Процент загрузки'] >= 80,
            'text-yellow-400':
              userUpload['Процент загрузки'] < 80 &&
              userUpload['Процент загрузки'] >= 50,
            'text-green-400':
              userUpload['Процент загрузки'] < 50,
          })}
        >
          {userUpload['Процент загрузки']}%
        </Typography>
      </div>
    </Box>
  );
});
