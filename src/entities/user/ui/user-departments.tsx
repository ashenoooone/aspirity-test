import React, { memo } from 'react';
import { UserDepartments as TUserDepartments } from '../types';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';

interface UserDepartmentsProps {
  className?: string;
  userDepartments: TUserDepartments;
}

export const UserDepartments = memo(
  (props: UserDepartmentsProps) => {
    const { className = '', userDepartments } = props;
    return (
      <div className={cn(className)}>
        <div className={'flex justify-between'}>
          <Typography variant={'h5'} tag={'h5'}>
            Подразделения
          </Typography>
          <Button variant={'transparent'}>Изменить</Button>
        </div>
      </div>
    );
  },
);
