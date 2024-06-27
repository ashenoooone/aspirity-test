import React, {
  memo,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { UserVacationItem } from '../../types';
import { Box } from '@/shared/ui/box';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import {
  TableCell,
  TableColumn,
  TableHead,
} from '@/shared/ui/table';
import { Arrow } from '@/shared/assets/arrow';
import { UserVacationHistoryModal } from '@/entities/user/ui/user-vacation/user-vacation-history-modal';
import { UserVacationHistoryItem } from '@/entities/user/ui/user-vacation/user-vacation-history-item';
import { Separator } from '@/shared/ui/separator';
import { UserVacationHistoryList } from '@/entities/user/ui/user-vacation/user-vacation-history-list';

interface UserVacationHistoryProps {
  className?: string;
  userVacationHistory: UserVacationItem[];
}

export const UserVacationHistory = memo(
  (props: UserVacationHistoryProps) => {
    const { className = '', userVacationHistory } = props;

    const [isModalOpen, setIsModalOpen] =
      useState<boolean>(false);

    const onCloseModalHandler = useCallback(() => {
      setIsModalOpen(false);
    }, []);

    const onOpenModalHandler = useCallback(() => {
      setIsModalOpen(true);
    }, []);

    return (
      <Box
        className={cn(
          className,
          'xl:p-[30px] py-[30px] px-4',
        )}
      >
        <div
          className={
            'flex justify-between items-center mb-4'
          }
        >
          <Typography
            className={
              'text-body-1 leading-body-1 xl:text-h5 xl:leading-h5'
            }
            tag={'h5'}
          >
            История отпусков
          </Typography>
          <Button
            onClick={onOpenModalHandler}
            variant={'transparent_alternative'}
          >
            Посмотреть все
          </Button>
        </div>
        <UserVacationHistoryList
          userVacationHistory={userVacationHistory}
        />
        <UserVacationHistoryModal
          isModalOpen={isModalOpen}
          onCloseModalHandler={onCloseModalHandler}
          userVacationHistory={userVacationHistory}
        />
      </Box>
    );
  },
);
