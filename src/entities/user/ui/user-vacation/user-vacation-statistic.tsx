import React, { memo } from 'react';
import { UserVacationStatistic as TUserVacationStatistic } from '../../types';
import { Box } from '@/shared/ui/box';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Tooltip } from '@/shared/ui/tooltip';
import { Info } from '@/shared/assets/info';
import { Button } from '@/shared/ui/button';

interface UserVacationStatisticProps {
  className?: string;
  userVacationStatistic: TUserVacationStatistic;
}

export const UserVacationStatistic = memo(
  (props: UserVacationStatisticProps) => {
    const { className = '', userVacationStatistic } = props;

    return (
      <Box className={cn(className, 'p-[30px]')}>
        <div className={'flex gap-2 items-center'}>
          <Typography variant={'h5'} tag={'h5'}>
            Статистика
          </Typography>
          <Tooltip
            direction={'right'}
            content={
              <Typography
                variant={'subtitle-2'}
                className={'w-max'}
              >
                1 раб. месяц = 3 дня отпуска
              </Typography>
            }
            trigger={
              <Button variant={'icon'}>
                <Info />
              </Button>
            }
          />
        </div>
      </Box>
    );
  },
);
