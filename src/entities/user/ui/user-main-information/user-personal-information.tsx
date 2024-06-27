import React, { memo, useCallback, useState } from 'react';
import {
  UserMainInformation,
  UserPersonalInformation as TUserPersonalInformation,
} from '../../types';
import { Typography } from '@/shared/ui/typography';
import { cn } from '@/shared/utils';
import { Button } from '@/shared/ui/button';
import { UserPersonalInformationForm } from '@/entities/user/ui/user-main-information/user-personal-information-form';
import { Modal } from '@/shared/ui/modal';
import { Cross } from '@/shared/assets/cross';
import { UserPersonalInformationModal } from '@/entities/user/ui/user-main-information/user-personal-information-modal';

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
            Персональная информация
          </Typography>
          <Button
            onClick={onOpenModalHandler}
            variant={'transparent_alternative'}
          >
            Изменить
          </Button>
        </div>
        <UserPersonalInformationForm
          disabled
          userPersonalInformation={userPersonalInformation}
          userMainInformation={userMainInformation}
        />
        <UserPersonalInformationModal
          onClose={onCloseModalHandler}
          isOpen={isModalOpen}
          userPersonalInformation={userPersonalInformation}
          userMainInformation={userMainInformation}
        />
      </div>
    );
  },
);
