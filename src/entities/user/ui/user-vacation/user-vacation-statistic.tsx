import React, { memo } from 'react';
import { UserVacationStatistic as TUserVacationStatistic } from '../../types';
import { Box } from '@/shared/ui/box';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';

interface UserVacationStatisticProps {
  className?: string;
  userVacationStatistic: TUserVacationStatistic;
}

export const UserVacationStatistic = memo(
  (props: UserVacationStatisticProps) => {
    const { className = '', userVacationStatistic } = props;
    return (
      <Box className={cn(className, 'p-[30px]')}>
        <Typography variant={'h5'} tag={'h5'}>
          Статистика
        </Typography>
      </Box>
    );
  },
);
