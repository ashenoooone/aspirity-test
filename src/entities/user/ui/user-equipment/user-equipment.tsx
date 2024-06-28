import React, { memo, useCallback, useState } from 'react';
import { UserEquipment as TUserEquipment } from '@/entities/user';
import { Box } from '@/shared/ui/box';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';
import { UserEquipmentList } from '@/entities/user/ui/user-equipment/user-equipment-list';
import { UserEquipmentChangeModal } from '@/entities/user/ui/user-equipment/user-equipment-change-modal';

interface UserEquipmentProps {
  className?: string;
  userEquipment: TUserEquipment;
}

export const UserEquipment = memo(
  (props: UserEquipmentProps) => {
    const { className = '', userEquipment } = props;

    const [isModalOpen, setIsModalOpen] =
      useState<boolean>(false);

    const onCloseModalHandler = useCallback(() => {
      setIsModalOpen(false);
    }, []);

    const onOpenModalHandler = useCallback(() => {
      setIsModalOpen(true);
    }, []);

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
          <Button
            onClick={onOpenModalHandler}
            variant={'transparent_alternative'}
          >
            Изменить
          </Button>
        </div>
        <UserEquipmentList userEquipment={userEquipment} />
        <UserEquipmentChangeModal
          isOpen={isModalOpen}
          onClose={onCloseModalHandler}
          userEquipment={userEquipment}
        />
      </Box>
    );
  },
);
