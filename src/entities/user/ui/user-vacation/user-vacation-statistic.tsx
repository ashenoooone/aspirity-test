import React, { memo } from 'react';
import { UserVacationStatistic as TUserVacationStatistic } from '../../types';
import { Box } from '@/shared/ui/box';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Tooltip } from '@/shared/ui/tooltip';
import { Info } from '@/shared/assets/info';
import { Button } from '@/shared/ui/button';
import { UserVacationChart } from '@/entities/user/ui/user-vacation/user-vacation-chart';

interface UserVacationStatisticProps {
  className?: string;
  userVacationStatistic: TUserVacationStatistic;
}

export const UserVacationStatistic = memo(
  (props: UserVacationStatisticProps) => {
    const { className = '', userVacationStatistic } = props;

    return (
      <Box className={cn(className, 'p-[30px]')}>
        <div className={'flex gap-2 items-center mb-4'}>
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
        <div className={'flex flex-col items-center'}>
          <UserVacationChart
            statistic={userVacationStatistic}
          />
        </div>
      </Box>
    );
  },
);
