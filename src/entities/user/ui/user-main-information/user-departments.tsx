import React, { memo, useCallback, useState } from 'react';
import { UserDepartments as TUserDepartments } from '../../types';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { UserDepartmentsForm } from './user-departments-form';
import { Cross } from '@/shared/assets/cross';
import { UserPersonalInformationForm } from '@/entities/user/ui/user-main-information/user-personal-information-form';
import { Modal } from '@/shared/ui/modal';

interface UserDepartmentsProps {
  className?: string;
  userDepartments: TUserDepartments;
}

export const UserDepartments = memo(
  (props: UserDepartmentsProps) => {
    const { className = '', userDepartments } = props;

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
            Подразделения
          </Typography>
          <Button
            onClick={onOpenModalHandler}
            variant={'transparent_alternative'}
          >
            Изменить
          </Button>
        </div>
        <UserDepartmentsForm
          disabled
          userDepartments={userDepartments}
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
            <Typography
              tag={'h4'}
              className={
                'text-body-1 leading-body-1 xl:text-h5 xl:leading-h5'
              }
            >
              Подразделения
            </Typography>
            <Button
              variant={'icon'}
              onClick={onCloseModalHandler}
            >
              <Cross />
            </Button>
          </div>
          <UserDepartmentsForm
            userDepartments={userDepartments}
          />
        </Modal>
      </div>
    );
  },
);
