import React, { memo, ReactNode, useMemo } from 'react';
import { UserEquipment as TUserEquipment } from '@/entities/user';
import { TableColumn } from '@/shared/ui/table';
import { Separator } from '@/shared/ui/separator';
import { UserEquipmentListItem } from '@/entities/user/ui/user-equipment/user-equipment-list-item';
import { Badge } from '@/shared/ui/badge';

interface UserEquipmentListProps {
  className?: string;
  userEquipment: TUserEquipment;
}

export const UserEquipmentList = memo(
  (props: UserEquipmentListProps) => {
    const { className = '', userEquipment } = props;

    const columns: ReactNode[][] = useMemo(() => {
      // искуственно ограничиваю до 2, в реальном проекте с беком просто получаем сначала 5 штук,
      // а при открытии модалки подгружаем все остальные
      return userEquipment.slice(0, 2).reduce(
        (acc, v) => {
          acc[0].push(v['Название товара']);
          acc[1].push(
            <Badge
              variant={
                v.Статус === 'Компания' ? 'orange' : 'blue'
              }
            >
              {v.Статус}
            </Badge>,
          );
          acc[2].push(v['Осталось недель'] ?? '⠀');
          return acc;
        },
        [[], [], []] as ReactNode[][],
      );
    }, [userEquipment]);

    return (
      <div className={className}>
        {/*1280px+*/}
        <div className={'flex lg:hidden'}>
          <TableColumn
            className={'basis-3/5'}
            header={'Название товара'}
            values={columns[0]}
          />
          <TableColumn
            className={'basis-1/5'}
            header={'Статус'}
            values={columns[1]}
          />
          <TableColumn
            className={'basis-1/5 text-right'}
            header={'Осталось недель'}
            values={columns[2]}
          />
        </div>
        {/*  1280px-*/}
        <div className={'xl:hidden flex flex-col gap-4'}>
          {userEquipment.map((item, index) => (
            <>
              {index !== 0 && <Separator />}
              <UserEquipmentListItem
                key={index}
                item={item}
              />
            </>
          ))}
        </div>
      </div>
    );
  },
);
