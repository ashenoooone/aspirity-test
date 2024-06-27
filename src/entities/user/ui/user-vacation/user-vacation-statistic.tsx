import React, { memo, useCallback, useState } from 'react';
import { UserVacationStatistic as TUserVacationStatistic } from '../../types';
import { Box } from '@/shared/ui/box';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Tooltip } from '@/shared/ui/tooltip';
import { Info } from '@/shared/assets/info';
import { Button } from '@/shared/ui/button';
import { UserVacationChart } from '@/entities/user/ui/user-vacation/user-vacation-chart';
import { UserVacationStatisticItem } from '@/entities/user/ui/user-vacation/user-vacation-statistic-item';
import { useMediaQuery } from '@siberiacancode/reactuse';

interface UserVacationStatisticProps {
  className?: string;
  userVacationStatistic: TUserVacationStatistic;
}

export const UserVacationStatistic = memo(
  (props: UserVacationStatisticProps) => {
    const { className = '', userVacationStatistic } = props;
    const matches = useMediaQuery('(max-width: 1280px)');
    const [currentHoveredItem, setCurrentHoveredItem] =
      useState<keyof TUserVacationStatistic | undefined>(
        undefined,
      );

    const handleChangeCurrentHoveredItem = useCallback(
      (
        newHoveredItem:
          | keyof TUserVacationStatistic
          | undefined,
      ) => {
        return () => {
          setCurrentHoveredItem(newHoveredItem);
        };
      },
      [],
    );

    return (
      <Box className={cn(className, 'p-[30px]')}>
        <div className={'flex gap-2 items-center mb-4'}>
          <Typography variant={'h5'} tag={'h5'}>
            Статистика
          </Typography>
          <Tooltip
            direction={matches ? 'top-center' : 'right'}
            content={
              <Typography
                variant={'subtitle-2'}
                className={'w-max'}
              >
                1 раб. месяц = 3 дня отпуска
              </Typography>
            }
            trigger={
              <Button variant={'icon'}>
                <Info />
              </Button>
            }
          />
        </div>
        <div className={'flex flex-col items-center mb-16'}>
          <UserVacationChart
            hoveredItem={currentHoveredItem}
            statistic={userVacationStatistic}
          />
        </div>
        <div className={'flex flex-col gap-2'}>
          <UserVacationStatisticItem
            onMouseEnter={handleChangeCurrentHoveredItem(
              'Доступно сейчас',
            )}
            onMouseLeave={handleChangeCurrentHoveredItem(
              undefined,
            )}
            dotColor={'green'}
            title={'Доступно сейчас'}
            number={
              userVacationStatistic['Доступно сейчас']
            }
          />
          <UserVacationStatisticItem
            onMouseEnter={handleChangeCurrentHoveredItem(
              'Запланировано',
            )}
            onMouseLeave={handleChangeCurrentHoveredItem(
              undefined,
            )}
            dotColor={'yellow'}
            title={'Запланировано'}
            number={userVacationStatistic['Запланировано']}
          />
          <UserVacationStatisticItem
            onMouseEnter={handleChangeCurrentHoveredItem(
              'Использовано/недоступно',
            )}
            onMouseLeave={handleChangeCurrentHoveredItem(
              undefined,
            )}
            dotColor={'red'}
            title={'Использовано/недоступно'}
            number={
              userVacationStatistic[
                'Использовано/недоступно'
              ]
            }
          />
        </div>
      </Box>
    );
  },
);
