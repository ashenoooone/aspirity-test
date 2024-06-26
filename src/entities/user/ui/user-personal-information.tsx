import React, { memo } from 'react';
import { Box } from '@/shared/ui/box';
import { UserPersonalInformation as TUserPersonalInformation } from '../types';
interface UserPersonalInformationProps {
  className?: string;
  userPersonalInformation: TUserPersonalInformation;
}

export const UserPersonalInformation = memo(
  (props: UserPersonalInformationProps) => {
    const { className = '', userPersonalInformation } =
      props;
    return <Box className={className}></Box>;
  },
);
