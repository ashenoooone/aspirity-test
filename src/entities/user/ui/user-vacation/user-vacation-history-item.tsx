import React, { memo } from 'react';
import { UserVacationItem } from '@/entities/user';
import { Typography } from '@/shared/ui/typography';
import { Arrow } from '@/shared/assets/arrow';
import { cn } from '@/shared/utils';

interface UserVacationHistoryItemProps {
  className?: string;
  item: UserVacationItem;
}

export const UserVacationHistoryItem = memo(
  (props: UserVacationHistoryItemProps) => {
    const { className = '', item } = props;
    return (
      <div className={cn('flex flex-col gap-4', className)}>
        <Typography
          className={'inline-flex flex-col gap-2'}
          variant={'body-1'}
        >
          <span className={'text-text-tertiary'}>Тип</span>
          {item.Тип}
        </Typography>
        <Typography
          className={'inline-flex flex-col gap-2'}
          variant={'body-1'}
        >
          <span className={'text-text-tertiary'}>
            Даты отпуска
          </span>
          <span
            className={'inline-flex items-center gap-2'}
          >
            {item['Даты отпуска'].Начало}
            <Arrow
              className={cn({
                'text-yellow': item.Тип === 'Отпуск',
                'text-red':
                  item.Тип === 'Отгул' ||
                  item.Тип === 'Больничный',
              })}
            />
            {item['Даты отпуска'].Окончание}
          </span>
        </Typography>
        <Typography
          className={'inline-flex flex-col gap-2'}
          variant={'body-1'}
        >
          <span className={'text-text-tertiary'}>
            Количество дней
          </span>
          {item['Количество дней']}
        </Typography>
      </div>
    );
  },
);
