import React, { memo } from 'react';
import {
  UserMainInformation,
  UserPersonalInformation as TUserPersonalInformation,
} from '../../types';
import { Typography } from '@/shared/ui/typography';
import { cn } from '@/shared/utils';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { UserPersonalInformationForm } from '@/entities/user/ui/user-main-information/user-personal-information-form';
interface UserPersonalInformationProps {
  className?: string;
  userPersonalInformation: TUserPersonalInformation;
  userMainInformation: UserMainInformation;
}

export const UserPersonalInformation = memo(
  (props: UserPersonalInformationProps) => {
    const {
      className = '',
      userPersonalInformation,
      userMainInformation,
    } = props;

    return (
      <div className={cn(className)}>
        <div className={'flex justify-between mb-8'}>
          <Typography variant={'h5'} tag={'h5'}>
            Персональная информация
          </Typography>
          {/*todo переделать кнопку*/}
          <Button variant={'transparent_alternative'}>
            Изменить
          </Button>
        </div>
        <div>
          <UserPersonalInformationForm
            disabled
            userPersonalInformation={
              userPersonalInformation
            }
            userMainInformation={userMainInformation}
          />
        </div>
      </div>
    );
  },
);
