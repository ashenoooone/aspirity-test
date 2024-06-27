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
    <div className={'flex justify-between items-center'}>
      <Typography variant={'h5'} tag={'h5'}>
        Загрузка сотрудника
      </Typography>
      <Typography
        variant={'body-2'}
        className={cn({
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
    <div className={'flex justify-between'}>
      <div>
        <Typography
          className={'text-text-tertiary mb-2'}
          variant={'body-1'}
        >
          Ответственный
        </Typography>
        <div className={'flex items-center gap-2'}>
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
    <div>
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
    <div className={'flex justify-between'}>
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
      <div />
    </div>
  );
};

export const UserUpload = memo((props: UserUploadProps) => {
  const { className = '', userUpload } = props;
  return (
    <Box
      className={cn(
        className,
        'p-[30px] flex flex-col gap-[40px]',
      )}
    >
      <UserUploadHeader
        percentage={userUpload['Процент загрузки']}
      />
      <UserUploadProjectInfo userUpload={userUpload} />
      <UserUploadTeam userUpload={userUpload} />
      <UserUploadTermsOfWork userUpload={userUpload} />
      <Button>Посмотреть всю загрузку</Button>
    </Box>
  );
});
