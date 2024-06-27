import React, { memo, useCallback, useState } from 'react';
import { UserContacts as TUserContacts } from '../../types';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { UserContactsForm } from '@/entities/user/ui/user-main-information/user-contacts-form';
import { Cross } from '@/shared/assets/cross';
import { UserDepartmentsForm } from '@/entities/user/ui/user-main-information/user-departments-form';
import { Modal } from '@/shared/ui/modal';
import { UserContactsModal } from '@/entities/user/ui/user-main-information/user-contacts-modal';

interface UserContactsProps {
  className?: string;
  userContacts: TUserContacts;
}

export const UserContacts = memo(
  (props: UserContactsProps) => {
    const { className = '', userContacts } = props;

    const [isModalOpen, setIsModalOpen] =
      useState<boolean>(false);

    const onCloseModalHandler = useCallback(() => {
      setIsModalOpen(false);
    }, []);

    const onOpenModalHandler = useCallback(() => {
      setIsModalOpen(true);
    }, []);

    return (
      <div className={cn(className)}>
        <div
          className={
            'flex justify-between items-center mb-8'
          }
        >
          <Typography
            className={
              'text-body-1 leading-body-1 xl:text-h5 xl:leading-h5'
            }
            tag={'h5'}
          >
            Контакты
          </Typography>
          <Button
            onClick={onOpenModalHandler}
            variant={'transparent_alternative'}
          >
            Изменить
          </Button>
        </div>
        <UserContactsForm
          disabled
          userContacts={userContacts}
        />
        <UserContactsModal
          userContacts={userContacts}
          isOpen={isModalOpen}
          onClose={onCloseModalHandler}
        />
      </div>
    );
  },
);
