import React, { memo, ReactNode, useMemo } from 'react';
import { UserVacationItem } from '@/entities/user';
import { TableColumn } from '@/shared/ui/table';
import { Separator } from '@/shared/ui/separator';
import { UserVacationHistoryItem } from '@/entities/user/ui/user-vacation/user-vacation-history-item';
import { Arrow } from '@/shared/assets/arrow';
import { cn } from '@/shared/utils';

interface UserVacationHistoryListProps {
  className?: string;
  userVacationHistory: UserVacationItem[];
}

export const UserVacationHistoryList = memo(
  (props: UserVacationHistoryListProps) => {
    const { className = '', userVacationHistory } = props;

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
      <div className={className}>
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
      </div>
    );
  },
);
