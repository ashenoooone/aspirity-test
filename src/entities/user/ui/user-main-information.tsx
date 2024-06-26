import React, { memo } from 'react';
import { UserPersonalInformation } from './user-personal-information';
import { UserUpload } from './user-upload';
import {
  UserPersonalInformation as TUserPersonalInformation,
  UserUpload as TUserUpload,
} from '../types';

interface UserMainInformationProps {
  className?: string;
  userPersonalInformation: TUserPersonalInformation;
  userUpload: TUserUpload;
}

export const UserMainInformation = memo(
  (props: UserMainInformationProps) => {
    const {
      className = '',
      userUpload,
      userPersonalInformation,
    } = props;
    return (
      <div className={className}>
        <UserPersonalInformation
          userPersonalInformation={userPersonalInformation}
        />
        <UserUpload userUpload={userUpload} />
      </div>
    );
  },
);
