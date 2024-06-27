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

    const columns: ReactNode[][] = useMemo(() => {
      return userVacationHistory.reduce(
        (acc, v) => {
          acc[0].push(v['Тип']);
          acc[1].push(
            <div className={'flex items-center gap-2'}>
              {v['Даты отпуска'].Начало}
              <Arrow
                className={cn({
                  'text-yellow': v.Тип === 'Отпуск',
                  'text-red': v.Тип === 'Отгул',
                })}
              />
              {v['Даты отпуска'].Окончание}
            </div>,
          );
          acc[2].push(v['Количество дней']);
          return acc;
        },
        [[], [], []] as ReactNode[][],
      );
    }, [userVacationHistory]);

    return (
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
            История отпусков
          </Typography>
          <Button
            variant={'icon'}
            onClick={onCloseModalHandler}
          >
            <Cross />
          </Button>
        </div>
        <div className={'flex'}>
          <TableColumn
            className={'basis-2/5'}
            header={'Тип'}
            values={columns[0]}
          />
          <TableColumn
            className={'basis-2/5'}
            header={'Даты отпуска'}
            values={columns[1]}
          />
          <TableColumn
            className={'basis-1/5 text-right'}
            header={'Количество дней'}
            values={columns[2]}
          />
        </div>
      </Modal>
    );
  },
);
