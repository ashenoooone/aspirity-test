import React, { memo, useMemo } from 'react';
import { UserVacationStatistic } from '@/entities/user';
import { Pie, Cell, PieChart } from 'recharts';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import entry from 'next/dist/server/typescript/rules/entry';

interface UserVacationChartProps {
  className?: string;
  statistic?: UserVacationStatistic;
  hoveredItem?: keyof UserVacationStatistic;
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
    color: 'green',
  },
  {
    name: 'Запланировано',
    value: 300,
    color: 'yellow',
  },
  {
    name: 'Использовано/недоступно',
    value: 200,
    color: 'red',
  },
];

export const UserVacationChart = memo(
  (props: UserVacationChartProps) => {
    const {
      className = '',
      hoveredItem,
      statistic,
    } = props;

    const data: DataType = useMemo(() => {
      if (!statistic) return [];
      return [
        {
          name: 'Доступно сейчас',
          value: statistic['Доступно сейчас'],
          color: 'green',
        },
        {
          name: 'Запланировано',
          value: statistic.Запланировано,
          color: 'yellow',
        },
        {
          name: 'Использовано/недоступно',
          value: statistic['Использовано/недоступно'],
          color: 'red',
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
            {statistic?.['Доступно сейчас']}
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
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              // со stroke-width стремное решение, но иного не смог найти
              <Cell
                key={`cell-${index}`}
                stroke={'currentColor'}
                fill={'currentColor'}
                strokeWidth={
                  entry.name === hoveredItem ? 5 : 0
                }
                className={cn(
                  `text-${entry.color} fill-${entry.color}`,
                  {
                    'z-10': entry.name === hoveredItem,
                  },
                  'font-medium',
                )}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  },
);
