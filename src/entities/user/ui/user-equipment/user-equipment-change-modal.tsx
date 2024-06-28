import React, { memo, useCallback, useMemo } from 'react';
import { Modal, ModalProps } from '@/shared/ui/modal';
import { UserEquipmentItem } from '@/entities/user';
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import { Cross } from '@/shared/assets/cross';
import { TrashBox } from '@/shared/assets/trash-box';
import { Separator } from '@/shared/ui/separator';

interface UserEquipmentChangeModalProps extends ModalProps {
  className?: string;
  userEquipment: UserEquipmentItem[];
}

interface UserEquipmentChangeModalFormValues {
  userOwnEquipment: UserEquipmentItem[];
}

export const UserEquipmentChangeModal = memo(
  (props: UserEquipmentChangeModalProps) => {
    const {
      className = '',
      userEquipment,
      onClose,
      isOpen,
    } = props;

    const userOwnEquipment = useMemo(
      () =>
        userEquipment.filter(
          (eq) => eq.Статус === 'Личное',
        ),
      [userEquipment],
    );

    const { control, handleSubmit } =
      useForm<UserEquipmentChangeModalFormValues>({
        defaultValues: {
          userOwnEquipment: userOwnEquipment,
        },
      });

    const { fields, append, remove } = useFieldArray({
      control,
      name: 'userOwnEquipment',
    });
    const onAddNewEquipmentClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        append({
          'Название товара': '',
          'Осталось недель': null,
          Статус: 'Личное',
        });
      },
      [append],
    );
    const generateOnDeleteItemClickHandler = useCallback(
      (index: number) => {
        return () => {
          remove(index);
        };
      },
      [remove],
    );

    const onSubmit: SubmitHandler<
      UserEquipmentChangeModalFormValues
    > = (data) => {
      console.log(data);
    };

    return (
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        className={cn('max-w-[464px] w-full', className)}
      >
        <div
          className={
            'flex items-center justify-between mb-10'
          }
        >
          <Typography
            tag={'h4'}
            className={
              'text-body-1 leading-body-1 xl:text-h5 xl:leading-h5'
            }
          >
            Оборудование
          </Typography>
          <Button variant={'icon'} onClick={onClose}>
            <Cross />
          </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'flex flex-col gap-8'}>
            {fields.map((f, i) => (
              <>
                {i > 0 && <Separator />}
                <div
                  className={'flex gap-[10px] items-center'}
                >
                  <Controller
                    render={({ field }) => (
                      <Input
                        label={'Название'}
                        {...field}
                      />
                    )}
                    name={`userOwnEquipment.${i}.Название товара`}
                    control={control}
                  />
                  <Button
                    variant={'icon'}
                    onClick={generateOnDeleteItemClickHandler(
                      i,
                    )}
                  >
                    <TrashBox />
                  </Button>
                </div>
              </>
            ))}
          </div>
          <div
            className={'flex flex-col gap-2 mt-6 xl:mt-10'}
          >
            <Button
              variant={'outline'}
              onClick={onAddNewEquipmentClick}
            >
              Добавить новый
            </Button>
            <Button type={'submit'}>Сохранить</Button>
          </div>
        </form>
      </Modal>
    );
  },
);
