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
      <div className={cn(className, 'flex gap-4')}>
        <UserVacationStatistic
          className={'basis-1/3'}
          userVacationStatistic={userVacation['Статистика']}
        />
        <UserVacationHistory
          className={'basis-2/3'}
          userVacationHistory={
            userVacation['История отпусков']
          }
        />
      </div>
    );
  },
);
