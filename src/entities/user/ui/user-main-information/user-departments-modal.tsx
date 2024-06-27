import React, { memo } from 'react';
import { Modal, ModalProps } from '@/shared/ui/modal';
import { UserDepartments } from '@/entities/user';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { Cross } from '@/shared/assets/cross';
import { UserDepartmentsForm } from '@/entities/user/ui/user-main-information/user-departments-form';

interface UserDepartmentsModalProps extends ModalProps {
  className?: string;
  userDepartments: UserDepartments;
}

export const UserDepartmentsModal = memo(
  (props: UserDepartmentsModalProps) => {
    const {
      className = '',
      isOpen,
      userDepartments,
      onClose,
    } = props;
    return (
      <Modal
        className={'max-w-[824px] w-full'}
        onClose={onClose}
        isOpen={isOpen}
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
          <Button variant={'icon'} onClick={onClose}>
            <Cross />
          </Button>
        </div>
        <UserDepartmentsForm
          userDepartments={userDepartments}
        />
      </Modal>
    );
  },
);
