import React, { memo } from 'react';
import { UserShortType } from '@/entities/user';
import Image from 'next/image';
import Avatar from '@/shared/ui/avatar';
import { cn } from '@/shared/utils';

interface AvatarGroupProps {
  className?: string;
  users: UserShortType[];
  totalUsers: number;
  onClickRest?: () => void;
}

const MAX_MEMBERS = 99;

export const AvatarGroup = memo(
  (props: AvatarGroupProps) => {
    const {
      className = '',
      users,
      onClickRest,
      totalUsers,
    } = props;
    return (
      <div className={cn('flex flex-wrap', className)}>
        {users.slice(0, 7).map((m) => {
          return (
            <Avatar
              key={`${m.Имя} ${m.Фамилия} ${m.Отчество}`}
              title={`${m.Имя} ${m.Фамилия} ${m.Отчество}`}
              size={'48'}
              src={m.Аватар}
              alt={m.Имя}
              className={
                'border-2 border-bg-secondary [&:not(:first-child)]:-ml-3'
              }
              fallback={m.Имя[0] + m.Фамилия[0]}
            />
          );
        })}
        {users.length < totalUsers && (
          <Avatar
            onClick={onClickRest}
            size={'48'}
            alt={`${
              totalUsers - users.length > MAX_MEMBERS
                ? MAX_MEMBERS
                : totalUsers - users.length
            }`}
            fallbackClassnames={cn(
              'text-body-1 leading-body-1 text-text-primary bg-transparent',
              {
                'cursor-pointer hover:text-text-secondary':
                  onClickRest,
              },
            )}
            fallback={`+${
              totalUsers - users.length > MAX_MEMBERS
                ? MAX_MEMBERS
                : totalUsers - users.length
            }`}
          />
        )}
      </div>
    );
  },
);
