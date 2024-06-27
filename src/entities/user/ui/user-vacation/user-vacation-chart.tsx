import React, { memo, useMemo } from 'react';
import { UserVacationStatistic } from '@/entities/user';
import { Pie, Cell, PieChart } from 'recharts';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';

interface UserVacationChartProps {
  className?: string;
  statistic?: UserVacationStatistic;
}

type DataType = {
  name: keyof UserVacationStatistic;
  value: number;
  color: string;
}[];

const data: {
  name: keyof UserVacationStatistic;
  value: number;
  color: string;
}[] = [
  {
    name: 'Доступно сейчас',
    value: 400,
    color: 'fill-green',
  },
  {
    name: 'Запланировано',
    value: 300,
    color: 'fill-yellow',
  },
  {
    name: 'Использовано/недоступно',
    value: 200,
    color: 'fill-red',
  },
];

export const UserVacationChart = memo(
  (props: UserVacationChartProps) => {
    const { className = '', statistic } = props;

    const totalDays = useMemo(() => {
      if (!statistic) return 0;
      return Object.values(statistic).reduce(
        (acc, item) => {
          return acc + item;
        },
        0,
      );
    }, [statistic]);

    const data: DataType = useMemo(() => {
      if (!statistic) return [];
      return [
        {
          name: 'Доступно сейчас',
          value: statistic['Доступно сейчас'],
          color: 'fill-green',
        },
        {
          name: 'Запланировано',
          value: statistic.Запланировано,
          color: 'fill-yellow',
        },
        {
          name: 'Использовано/недоступно',
          value: statistic['Использовано/недоступно'],
          color: 'fill-red',
        },
      ];
    }, [statistic]);

    return (
      <div className={cn('relative w-[160px]', className)}>
        <div
          className={
            'top-1/2 -translate-y-1/2 flex flex-col items-center left-1/2 -translate-x-1/2 absolute z-10'
          }
        >
          <Typography variant={'h4'} tag={'h4'}>
            {totalDays}
          </Typography>
          <Typography
            variant={'subtitle-2'}
            className={'text-text-tertiary'}
          >
            дня
          </Typography>
        </div>
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={70}
            strokeWidth={0}
            className={'border-none'}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                className={entry.color}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  },
);
