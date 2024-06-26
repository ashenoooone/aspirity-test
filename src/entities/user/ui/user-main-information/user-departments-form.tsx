import React, { memo } from 'react';
import {
  UserDepartments as TUserDepartments,
  UserDepartments,
} from '../../types';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/utils';
import { Button } from '@/shared/ui/button';

interface UserDepartmentsFormProps {
  className?: string;
  userDepartments: TUserDepartments;
  disabled?: boolean;
}

type UserDepartmentsFormValues = UserDepartments;

export const UserDepartmentsForm = memo(
  (props: UserDepartmentsFormProps) => {
    const {
      className = '',
      userDepartments,
      disabled,
    } = props;

    const { control, handleSubmit } =
      useForm<UserDepartmentsFormValues>({
        disabled: disabled,
        defaultValues: {
          Должность: userDepartments.Должность,
          Отдел: userDepartments.Отдел,
          Руководитель: userDepartments.Руководитель,
          Уровень: userDepartments.Уровень,
        },
      });

    const onSubmit: SubmitHandler<
      UserDepartmentsFormValues
    > = (data) => {
      console.log(data);
    };

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('flex flex-col gap-6', className)}
      >
        <div className={'flex gap-6'}>
          <Controller
            render={({ field }) => (
              <Input label={'Отдел'} {...field} />
            )}
            name={'Отдел'}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Input label={'Руководитель'} {...field} />
            )}
            name={'Руководитель'}
            control={control}
          />
        </div>
        <div className={'flex gap-6'}>
          <Controller
            render={({ field }) => (
              <Input label={'Уровень'} {...field} />
            )}
            name={'Уровень'}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Input label={'Должность'} {...field} />
            )}
            name={'Должность'}
            control={control}
          />
        </div>
        {!disabled && (
          <Button type={'submit'}>Сохранить</Button>
        )}
      </form>
    );
  },
);
