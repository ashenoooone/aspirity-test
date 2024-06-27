import React from 'react';
import { UserPersonalInformation } from './user-personal-information';
import { UserUpload } from './user-upload';
import {
  UserDepartments as TUserDepartments,
  UserPersonalInformation as TUserPersonalInformation,
  UserUpload as TUserUpload,
  UserContacts as TUserContacts,
  UserMainInformation as TUserMainInformation,
} from '../../types';
import { cn } from '@/shared/utils';
import { Box } from '@/shared/ui/box';
import { UserDepartments } from '@/entities/user/ui/user-main-information/user-departments';
import { UserContacts } from '@/entities/user/ui/user-main-information/user-contacts';

interface UserMainInformationProps {
  className?: string;
  userPersonalInformation: TUserPersonalInformation;
  userUpload: TUserUpload;
  userDepartments: TUserDepartments;
  userContacts: TUserContacts;
  userMainInformation: TUserMainInformation;
}

export const UserMainInformation = (
  props: UserMainInformationProps,
) => {
  const {
    className = '',
    userUpload,
    userPersonalInformation,
    userDepartments,
    userContacts,
    userMainInformation,
  } = props;

  return (
    <div
      className={cn(className, 'flex gap-4 items-start')}
    >
      <Box
        className={
          'max-w-[820px] gap-10 flex flex-col flex-shrink-0 w-full p-[30px]'
        }
      >
        <UserPersonalInformation
          userMainInformation={userMainInformation}
          userPersonalInformation={userPersonalInformation}
        />
        <UserDepartments
          userDepartments={userDepartments}
        />
        <UserContacts userContacts={userContacts} />
      </Box>
      <UserUpload
        className={'w-full'}
        userUpload={userUpload}
      />
    </div>
  );
};
