import React, { memo } from 'react';
import { Box } from '@/shared/ui/box';
import { UserUpload as TUserUpload } from '../types';
interface UserUploadProps {
  className?: string;
  userUpload: TUserUpload;
}

export const UserUpload = memo((props: UserUploadProps) => {
  const { className = '', userUpload } = props;
  return <Box className={className}></Box>;
});
