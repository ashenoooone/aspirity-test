import React, { memo } from 'react';
import { UserMainInformation } from '../types';
import { Box } from '@/shared/ui/box';
import Avatar from '@/shared/ui/avatar';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Tabs } from '@/shared/ui/tabs';

interface UserProfileHeaderProps {
  className?: string;
  userMainInformation: UserMainInformation;
  tabs?: string[];
  currentActiveTab?: string;
  setCurrentActiveTab?: (value: string) => void;
}

export const UserProfileHeader = memo(
  (props: UserProfileHeaderProps) => {
    const {
      className = '',
      userMainInformation,
      tabs,
      setCurrentActiveTab,
      currentActiveTab,
    } = props;
    return (
      <Box
        className={cn(
          'flex overflow-hidden xl:p-10 px-4 py-7',
          className,
        )}
      >
        <div
          className={
            'flex flex-col xl:gap-2 gap-6 xl:items-start justify-center items-center w-full'
          }
        >
          {/*---*/}
          <div
            className={
              'flex flex-col gap-4 text-center xl:text-start xl:flex-row items-center xl:gap-12'
            }
          >
            <Avatar
              size={'160'}
              src={userMainInformation['Аватар']}
              alt={userMainInformation['Имя']}
            />
            <Typography
              className={
                'font-bold xl:text-h3 xl:leading-h3 text-h5 leading-h5'
              }
            >
              {userMainInformation['Фамилия']} <br />
              {userMainInformation['Имя']}{' '}
              {userMainInformation['Отчество']}
            </Typography>
          </div>
          {/*---*/}
          <div
            className={'xl:ml-52 text-center xl:text-start'}
          >
            <Typography variant={'body-1'}>
              {userMainInformation['Должность']}
            </Typography>
            <div className={'flex gap-2'}>
              <Typography variant={'body-1'}>
                {userMainInformation['Страна']},{' '}
                {userMainInformation['Город']}
              </Typography>
              <span className={'text-text-tertiary'}>
                •
              </span>
              <span className={'text-text-tertiary'}>
                {userMainInformation['Был онлайн']}
              </span>
            </div>
          </div>
          {/*---*/}
          {tabs &&
            setCurrentActiveTab &&
            currentActiveTab && (
              <Tabs
                className={'xl:mt-[52px] xl:self-start'}
                tabs={tabs}
                setActiveTab={setCurrentActiveTab}
                activeTab={currentActiveTab}
              />
            )}
        </div>
      </Box>
    );
  },
);
