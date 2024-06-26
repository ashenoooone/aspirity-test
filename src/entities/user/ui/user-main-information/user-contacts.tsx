import React, { memo } from 'react';
import { UserContacts as TUserContacts } from '../../types';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { UserContactsForm } from '@/entities/user/ui/user-main-information/user-contacts-form';

interface UserContactsProps {
  className?: string;
  userContacts: TUserContacts;
}

export const UserContacts = memo(
  (props: UserContactsProps) => {
    const { className = '', userContacts } = props;
    return (
      <div className={cn(className)}>
        <div className={'flex justify-between mb-8'}>
          <Typography variant={'h5'} tag={'h5'}>
            Контакты
          </Typography>
          <Button variant={'transparent'}>Изменить</Button>
        </div>
        <UserContactsForm
          disabled
          userContacts={userContacts}
        />
      </div>
    );
  },
);
