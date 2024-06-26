import React, { memo } from 'react';
import { Box } from '@/shared/ui/box';
import { UserPersonalInformation as TUserPersonalInformation } from '../types';
import { Typography } from '@/shared/ui/typography';
import { cn } from '@/shared/utils';
import { Button } from '@/shared/ui/button';
interface UserPersonalInformationProps {
  className?: string;
  userPersonalInformation: TUserPersonalInformation;
}

export const UserPersonalInformation = memo(
  (props: UserPersonalInformationProps) => {
    const { className = '', userPersonalInformation } =
      props;
    return (
      <div className={cn(className)}>
        <div className={'flex justify-between'}>
          <Typography variant={'h5'} tag={'h5'}>
            Персональная информация
          </Typography>
          {/*todo переделать кнопку*/}
          <Button variant={'transparent'}>Изменить</Button>
        </div>
      </div>
    );
  },
);
