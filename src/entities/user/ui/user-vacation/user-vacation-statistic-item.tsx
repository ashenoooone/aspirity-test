import React, { ComponentProps, memo } from 'react';
import { UserVacationStatistic } from '@/entities/user';
import { cn } from '@/shared/utils';
import { Dot } from '@/shared/assets/dot';
import { Typography } from '@/shared/ui/typography';
import { formatDays } from '@/shared/utils/formatDays';

type DotColor = 'green' | 'yellow' | 'red';

interface UserVacationStatisticItemProps
  extends ComponentProps<'div'> {
  className?: string;
  title: keyof UserVacationStatistic;
  number: number;
  dotColor?: DotColor;
}

export const UserVacationStatisticItem = memo(
  (props: UserVacationStatisticItemProps) => {
    const {
      className = '',
      dotColor = 'green',
      number,
      title,
      ...rest
    } = props;
    return (
      <div
        className={cn(
          'border hover:border-icon-primary px-[10px] py-3 rounded-[16px] border-border-primary flex justify-between',
          className,
        )}
        {...rest}
      >
        <div className={'flex items-center gap-2'}>
          <Dot
            className={cn({
              'text-green': dotColor === 'green',
              'text-yellow': dotColor === 'yellow',
              'text-red': dotColor === 'red',
            })}
          />
          <Typography variant={'body-1'}>
            {title}
          </Typography>
        </div>
        <Typography variant={'body-1'}>
          {formatDays(number)}
        </Typography>
      </div>
    );
  },
);
