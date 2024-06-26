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
      <Box className={cn('flex p-10', className)}>
        <div className={'flex flex-col items-center gap-2'}>
          {/*---*/}
          <div className={'flex items-center gap-12'}>
            <Avatar
              size={'160'}
              src={userMainInformation['Аватар']}
              alt={userMainInformation['Имя']}
            />
            <Typography variant={'h3'}>
              {userMainInformation['Фамилия']} <br />
              {userMainInformation['Имя']}{' '}
              {userMainInformation['Отчество']}
            </Typography>
          </div>
          {/*---*/}
          <div>
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
                className={'mt-[52px] self-start'}
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
