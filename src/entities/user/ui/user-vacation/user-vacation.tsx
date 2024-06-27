import React, { memo } from 'react';
import { UserVacation as TUserVacation } from '../../types';
import { cn } from '@/shared/utils';
import { UserVacationStatistic } from './user-vacation-statistic';
import { UserVacationItem as TUserVacationHistory } from '../../types';
import { UserVacationHistory } from '@/entities/user/ui/user-vacation/user-vacation-history';
interface UserVacationProps {
  className?: string;
  userVacation: TUserVacation;
}

export const UserVacation = memo(
  (props: UserVacationProps) => {
    const { className = '', userVacation } = props;
    return (
      <div
        className={cn(
          className,
          'flex gap-4 xl:flex-row flex-col items-start',
        )}
      >
        <UserVacationStatistic
          className={'xl:basis-1/3 w-full'}
          userVacationStatistic={userVacation['Статистика']}
        />
        <UserVacationHistory
          className={'xl:basis-2/3 w-full'}
          userVacationHistory={
            userVacation['История отпусков']
          }
        />
      </div>
    );
  },
);
