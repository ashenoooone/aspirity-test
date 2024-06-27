import React, { memo } from 'react';
import { Modal, ModalProps } from '@/shared/ui/modal';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { Cross } from '@/shared/assets/cross';
import { UserPersonalInformationForm } from '@/entities/user/ui/user-main-information/user-personal-information-form';
import {
  UserMainInformation,
  UserPersonalInformation,
} from '@/entities/user';

interface UserPersonalInformationModalProps
  extends ModalProps {
  className?: string;
  userPersonalInformation: UserPersonalInformation;
  userMainInformation: UserMainInformation;
}

export const UserPersonalInformationModal = memo(
  (props: UserPersonalInformationModalProps) => {
    const {
      className = '',
      isOpen,
      userMainInformation,
      userPersonalInformation,
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
            Персональная информация
          </Typography>
          <Button variant={'icon'} onClick={onClose}>
            <Cross />
          </Button>
        </div>
        <UserPersonalInformationForm
          userPersonalInformation={userPersonalInformation}
          userMainInformation={userMainInformation}
        />
      </Modal>
    );
  },
);
