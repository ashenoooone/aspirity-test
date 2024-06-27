import React, { memo } from 'react';
import { UserShortType } from '@/entities/user';
import Avatar from '@/shared/ui/avatar';
import { Typography } from '@/shared/ui/typography';
import { Modal, ModalProps } from '@/shared/ui/modal';
import { Cross } from '@/shared/assets/cross';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

interface UserTeamModalProps extends ModalProps {
  className?: string;
  userTeam: UserShortType[];
}

const UserTeamMember = ({
  member,
}: {
  member: UserShortType;
}) => {
  return (
    <div className={'flex'}>
      <Avatar
        src={member.Аватар}
        size={'48'}
        alt={member.Имя}
        className={'mr-2'}
      />
      <div>
        <Typography variant={'body-1'}>
          {member.Имя} {member.Фамилия}
        </Typography>
        <Typography
          className={'text-text-secondary'}
          variant={'body-2'}
        >
          {member.Роль}
        </Typography>
      </div>
    </div>
  );
};

export const UserTeamModal = memo(
  (props: UserTeamModalProps) => {
    const {
      className = '',
      userTeam,
      isOpen,
      onClose,
    } = props;
    console.log(isOpen);
    return (
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        className={cn('max-w-[650px] w-full', className)}
      >
        <div
          className={
            'flex items-center justify-between mb-4 xl:mp-10'
          }
        >
          <Typography
            tag={'h4'}
            className={
              'text-body-1 leading-body-1 xl:text-h5 xl:leading-h5'
            }
          >
            Команда
          </Typography>
          <Button variant={'icon'} onClick={onClose}>
            <Cross />
          </Button>
        </div>
        <div className={'flex flex-col gap-4'}>
          {userTeam.map((member) => (
            <UserTeamMember
              key={`${member.Имя} ${member.Фамилия}`}
              member={member}
            />
          ))}
        </div>
      </Modal>
    );
  },
);
