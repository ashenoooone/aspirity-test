import React, { memo } from 'react';
import { UserEquipment as TUserEquipment } from '@/entities/user';
import { Box } from '@/shared/ui/box';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';
import { UserEquipmentList } from '@/entities/user/ui/user-equipment/user-equipment-list';

interface UserEquipmentProps {
  className?: string;
  userEquipment: TUserEquipment;
}

export const UserEquipment = memo(
  (props: UserEquipmentProps) => {
    const { className = '', userEquipment } = props;
    return (
      <Box
        className={cn(
          'xl:p-[30px] px-4 py-[30px]',
          className,
        )}
      >
        <div
          className={
            'flex justify-between items-center mb-4'
          }
        >
          <Typography
            className={
              'text-body-1 leading-body-1 xl:text-h5 xl:leading-h5'
            }
            tag={'h5'}
          >
            Оборудование{' '}
            <span className={'text-text-tertiary'}>
              {userEquipment?.length ?? ''}
            </span>
          </Typography>
          <Button variant={'transparent_alternative'}>
            Изменить
          </Button>
        </div>
        <UserEquipmentList userEquipment={userEquipment} />
      </Box>
    );
  },
);
