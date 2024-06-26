import React, { memo, ReactNode, useMemo } from 'react';
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

interface UserVacationHistoryProps {
  className?: string;
  userVacationHistory: UserVacationItem[];
}

export const UserVacationHistory = memo(
  (props: UserVacationHistoryProps) => {
    const { className = '', userVacationHistory } = props;

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
      <Box className={cn(className, 'p-[30px]')}>
        <div
          className={
            'flex justify-between items-center mb-4'
          }
        >
          <Typography variant={'h5'} tag={'h5'}>
            История отпусков
          </Typography>
          <Button variant={'transparent_alternative'}>
            Посмотреть все
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
      </Box>
    );
  },
);
