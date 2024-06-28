import React, { memo } from 'react';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Arrow } from '@/shared/assets/arrow';
import { UserEquipmentItem } from '@/entities/user';
import { Badge } from '@/shared/ui/badge';

interface UserEquipmentListItemProps {
  className?: string;
  item: UserEquipmentItem;
}

export const UserEquipmentListItem = memo(
  (props: UserEquipmentListItemProps) => {
    const { className = '', item } = props;
    return (
      <div className={cn('flex flex-col gap-4', className)}>
        <Typography
          className={'inline-flex flex-col gap-2'}
          variant={'body-1'}
        >
          <span className={'text-text-tertiary'}>
            Название товара
          </span>
          {item['Название товара']}
        </Typography>
        <Typography
          className={'inline-flex flex-col gap-2'}
          variant={'body-1'}
        >
          <Badge
            variant={
              item.Статус === 'Компания' ? 'orange' : 'blue'
            }
          >
            {item.Статус}
          </Badge>
        </Typography>
        <Typography
          className={'inline-flex flex-col gap-2'}
          variant={'body-1'}
        >
          <span className={'text-text-tertiary'}>
            Осталось недель
          </span>
          {item['Осталось недель'] ?? ''}
        </Typography>
      </div>
    );
  },
);
