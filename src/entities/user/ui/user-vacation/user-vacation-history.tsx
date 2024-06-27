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

    const columns: ReactNode[][] = useMemo(() => {
      // искуственно ограничиваю до 3, в реальном проекте с беком просто получаем сначала 5 штук,
      // а при открытии модалки подгружаем все остальные
      return userVacationHistory.slice(0, 3).reduce(
        (acc, v) => {
          acc[0].push(v['Тип']);
          acc[1].push(
            <div className={'flex items-center gap-2'}>
              {v['Даты отпуска'].Начало}
              <Arrow
                className={cn({
                  'text-yellow': v.Тип === 'Отпуск',
                  'text-red':
                    v.Тип === 'Отгул' ||
                    v.Тип === 'Больничный',
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
        {/*1280px+*/}
        <div className={'lg:flex hidden'}>
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
        <UserVacationHistoryModal
          isModalOpen={isModalOpen}
          onCloseModalHandler={onCloseModalHandler}
          userVacationHistory={userVacationHistory}
        />
        {/*  1280px-*/}
        <div className={'xl:hidden flex flex-col gap-4'}>
          {userVacationHistory.map((item, index) => (
            <>
              {index !== 0 && <Separator />}
              <UserVacationHistoryItem
                key={index}
                item={item}
              />
            </>
          ))}
        </div>
      </Box>
    );
  },
);
