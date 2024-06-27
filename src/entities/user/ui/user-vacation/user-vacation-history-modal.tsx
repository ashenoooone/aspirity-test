import React, { memo, ReactNode, useMemo } from 'react';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { Cross } from '@/shared/assets/cross';
import { UserDepartmentsForm } from '@/entities/user/ui/user-main-information/user-departments-form';
import { Modal } from '@/shared/ui/modal';
import { UserVacationItem } from '@/entities/user';
import { Arrow } from '@/shared/assets/arrow';
import { cn } from '@/shared/utils';
import { TableColumn } from '@/shared/ui/table';
import { Separator } from '@/shared/ui/separator';
import { UserVacationHistoryItem } from '@/entities/user/ui/user-vacation/user-vacation-history-item';
import { UserVacationHistoryList } from '@/entities/user/ui/user-vacation/user-vacation-history-list';

interface UserVacationHistoryModalProps {
  className?: string;
  userVacationHistory: UserVacationItem[];
  onCloseModalHandler: () => void;
  isModalOpen: boolean;
}

export const UserVacationHistoryModal = memo(
  (props: UserVacationHistoryModalProps) => {
    const {
      className = '',
      userVacationHistory,
      isModalOpen,
      onCloseModalHandler,
    } = props;

    return (
      <Modal
        className={'max-w-[824px] w-full'}
        onClose={onCloseModalHandler}
        isOpen={isModalOpen}
      >
        <div
          className={
            'flex items-center justify-between xl:mb-10 mb-4'
          }
        >
          <Typography
            tag={'h4'}
            className={
              'text-body-1 leading-body-1 xl:text-h5 xl:leading-h5'
            }
          >
            История отпусков
          </Typography>
          <Button
            variant={'icon'}
            onClick={onCloseModalHandler}
          >
            <Cross />
          </Button>
        </div>
        <UserVacationHistoryList
          userVacationHistory={userVacationHistory}
        />
      </Modal>
    );
  },
);
