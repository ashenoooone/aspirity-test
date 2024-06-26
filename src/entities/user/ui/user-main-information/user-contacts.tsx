import React, { memo, useCallback, useState } from 'react';
import { UserContacts as TUserContacts } from '../../types';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { UserContactsForm } from '@/entities/user/ui/user-main-information/user-contacts-form';
import { Cross } from '@/shared/assets/cross';
import { UserDepartmentsForm } from '@/entities/user/ui/user-main-information/user-departments-form';
import { Modal } from '@/shared/ui/modal';

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
        <div className={'flex justify-between mb-8'}>
          <Typography variant={'h5'} tag={'h5'}>
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
        <Modal
          className={'max-w-[824px] w-full'}
          onClose={onCloseModalHandler}
          isOpen={isModalOpen}
        >
          <div
            className={
              'flex items-center justify-between mb-10'
            }
          >
            <Typography tag={'h4'} variant={'h4'}>
              Подразделения
            </Typography>
            <Button
              variant={'icon'}
              onClick={onCloseModalHandler}
            >
              <Cross />
            </Button>
          </div>
          <UserContactsForm userContacts={userContacts} />
        </Modal>
      </div>
    );
  },
);
