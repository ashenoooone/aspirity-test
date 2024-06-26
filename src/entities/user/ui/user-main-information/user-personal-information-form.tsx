import React, { memo } from 'react';
import {
  UserMainInformation,
  UserPersonalInformation as TUserPersonalInformation,
} from '../../types';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/utils';
import { Button } from '@/shared/ui/button';

interface UserPersonalInformationFormProps {
  className?: string;
  userPersonalInformation: TUserPersonalInformation;
  userMainInformation: UserMainInformation;
  disabled?: boolean;
}

interface UserPersonalInformationFormValues {
  Имя: string;
  Фамилия: string;
  Отчество: string;
  Страна: string;
  Должность: string;
  Город: string;
  Зарплата: string;
  'Номер счета': string;
  'Еженедельная зарплата': string;
  'Дата трудоустройства': string;
  'Дата рождения': string;
}

export const UserPersonalInformationForm = memo(
  (props: UserPersonalInformationFormProps) => {
    const {
      className = '',
      userPersonalInformation,
      userMainInformation,
      disabled,
    } = props;

    const { control, handleSubmit } =
      useForm<UserPersonalInformationFormValues>({
        disabled: disabled,
        defaultValues: {
          Имя: userMainInformation.Имя,
          Фамилия: userMainInformation.Фамилия,
          Отчество: userMainInformation.Отчество,
          Страна: userMainInformation.Страна,
          Должность: userMainInformation.Должность,
          Город: userMainInformation.Город,
          Зарплата: userPersonalInformation.Зарплата,
          'Номер счета':
            userPersonalInformation['Номер счета'],
          'Еженедельная зарплата':
            userPersonalInformation[
              'Еженедельная зарплата'
            ],
          'Дата трудоустройства':
            userPersonalInformation['Дата трудоустройства'],
          'Дата рождения':
            userPersonalInformation['Дата рождения'],
        },
      });

    const onSubmit: SubmitHandler<
      UserPersonalInformationFormValues
    > = (data) => {
      console.log(data);
    };

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(className, 'flex flex-col gap-6')}
      >
        <div className={'flex gap-6'}>
          <Controller
            render={({ field }) => (
              <Input label={'Имя'} {...field} />
            )}
            name={'Имя'}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Input label={'Фамилия'} {...field} />
            )}
            name={'Фамилия'}
            control={control}
          />
        </div>
        <Controller
          render={({ field }) => (
            <Input label={'Отчество'} {...field} />
          )}
          name={'Отчество'}
          control={control}
        />
        <div className={'flex gap-6'}>
          <Controller
            render={({ field }) => (
              <Input label={'Дата рождения'} {...field} />
            )}
            name={'Дата рождения'}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Input
                label={'Дата трудоустройства'}
                {...field}
              />
            )}
            name={'Дата трудоустройства'}
            control={control}
          />
        </div>
        <div className={'flex gap-6'}>
          {/* todo сделать селекты */}
          <Controller
            render={({ field }) => (
              <Input label={'Страна'} {...field} />
            )}
            name={'Страна'}
            control={control}
          />
          {/* todo сделать селекты */}
          <Controller
            render={({ field }) => (
              <Input label={'Город'} {...field} />
            )}
            name={'Город'}
            control={control}
          />
        </div>
        <div className={'flex gap-6'}>
          <Controller
            render={({ field }) => (
              <Input label={'Зарплата'} {...field} />
            )}
            name={'Зарплата'}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Input
                label={'Еженедельная зарплата'}
                {...field}
              />
            )}
            name={'Еженедельная зарплата'}
            control={control}
          />
        </div>
        <Controller
          render={({ field }) => (
            <Input label={'Номер счета'} {...field} />
          )}
          name={'Номер счета'}
          control={control}
        />
        {!disabled && (
          <Button type={'submit'}>Сохранить</Button>
        )}
      </form>
    );
  },
);
