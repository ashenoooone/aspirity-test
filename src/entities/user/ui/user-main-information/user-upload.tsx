import React, { memo } from 'react';
import { Box } from '@/shared/ui/box';
import { UserUpload as TUserUpload } from '../../types';
import { Typography } from '@/shared/ui/typography';
import { cn } from '@/shared/utils';
import { Button } from '@/shared/ui/button';
import { Arrow } from '@/shared/assets/arrow';
import Avatar from '@/shared/ui/avatar';
import { AvatarGroup } from '@/shared/ui/avatar-group';

interface UserUploadProps {
  className?: string;
  userUpload: TUserUpload;
}

const UserUploadHeader = (props: {
  percentage: number;
}) => {
  return (
    <div
      className={
        'flex justify-between items-center xl:mb-0 mb-8'
      }
    >
      <Typography
        className={
          'text-body-1 leading-body-1 xl:text-h5 xl:leading-h5'
        }
        tag={'h5'}
      >
        Загрузка сотрудника
      </Typography>
      <Typography
        variant={'body-2'}
        className={cn('font-semibold', {
          'text-red': props.percentage >= 80,
          'text-yellow':
            props.percentage < 80 && props.percentage >= 50,
          'text-green': props.percentage < 50,
        })}
      >
        {props.percentage}%
      </Typography>
    </div>
  );
};

const UserUploadTeam = ({
  userUpload,
}: {
  userUpload: TUserUpload;
}) => {
  // todo title для ответвенного и клик для просмотра всех участников
  return (
    <div
      className={
        'flex xl:flex-row flex-col justify-between xl:mt-0 mt-4'
      }
    >
      <div>
        <Typography
          className={'text-text-tertiary mb-2'}
          variant={'body-1'}
        >
          Ответственный
        </Typography>
        <div
          className={'flex items-center gap-2 xl:mb-0 mb-4'}
        >
          <Avatar
            fallback={userUpload.Ответственный.Имя.slice(
              0,
              2,
            )}
            size={'48'}
            src={userUpload.Ответственный.Аватар}
            alt={userUpload.Ответственный.Имя}
          />
          <Typography variant={'body-1'}>
            {userUpload.Ответственный.Имя}{' '}
            {userUpload.Ответственный.Фамилия}
          </Typography>
        </div>
      </div>
      <div>
        <Typography
          className={'text-text-tertiary mb-2'}
          variant={'body-1'}
        >
          Команда
        </Typography>
        <AvatarGroup
          users={userUpload.Команда.Пользователи}
          totalUsers={
            userUpload.Команда['Всего участников']
          }
        />
      </div>
    </div>
  );
};

const UserUploadTermsOfWork = ({
  userUpload,
}: {
  userUpload: TUserUpload;
}) => {
  return (
    <div className={'xl:mt-0 mt-4'}>
      <Typography
        className={'text-text-tertiary'}
        variant={'body-1'}
      >
        Сроки работы
      </Typography>
      <div className={'flex gap-2 items-center'}>
        <Typography
          className={'text-text-secondary'}
          variant={'body-1'}
        >
          {userUpload['Сроки работы']['Начало']}
        </Typography>
        <Arrow className={'text-text-accent'} />
        <Typography
          className={'text-text-secondary'}
          variant={'body-1'}
        >
          {userUpload['Сроки работы']['Окончание']}
        </Typography>
      </div>
    </div>
  );
};

const UserUploadProjectInfo = ({
  userUpload,
}: {
  userUpload: TUserUpload;
}) => {
  return (
    <div
      className={
        'flex justify-between xl:flex-row flex-col gap-4 xl:gap-0'
      }
    >
      <div className={'justify-self-start'}>
        <Typography
          className={'text-text-tertiary'}
          variant={'body-1'}
        >
          Название проекта
        </Typography>
        <Typography variant={'body-1'}>
          {userUpload['Название проекта']}
        </Typography>
      </div>
      <div>
        <Typography
          className={'text-text-tertiary'}
          variant={'body-1'}
        >
          Тип проекта
        </Typography>
        <Typography variant={'body-1'}>
          {userUpload['Тип проекта']}
        </Typography>
      </div>
      <div className={'hidden xl:block'} />
    </div>
  );
};

export const UserUpload = memo((props: UserUploadProps) => {
  const { className = '', userUpload } = props;
  return (
    <Box
      className={cn(
        className,
        'py-[30px] px-4 flex flex-col xl:gap-[40px]',
      )}
    >
      <UserUploadHeader
        percentage={userUpload['Процент загрузки']}
      />
      <UserUploadProjectInfo userUpload={userUpload} />
      <UserUploadTeam userUpload={userUpload} />
      <UserUploadTermsOfWork userUpload={userUpload} />
      {/*todo модалка*/}
      <Button className={'mt-8'}>
        Посмотреть всю загрузку
      </Button>
    </Box>
  );
});
