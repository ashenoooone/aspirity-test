import React, { memo, useMemo } from 'react';
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
import { _select } from '@/shared/ui/_select';
import {
  Option,
  Select,
  SelectCombined,
} from '@/shared/ui/select';
import { useCountriesStore } from '@/entities/countries/countries.store';

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

    const countries = useCountriesStore.use.countries?.();

    const countriesSelectOptions: Option[] | undefined =
      useMemo(() => {
        return Array.from(new Set(countries))?.map(
          (i, index) => ({
            label: i,
            value: i,
          }),
        );
      }, [countries]);

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
          Зарплата: `${userPersonalInformation.Зарплата} руб/мес`,
          'Номер счета':
            userPersonalInformation['Номер счета'],
          'Еженедельная зарплата': `${
            userPersonalInformation['Еженедельная зарплата']
          } руб/нед`,
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
          <Controller
            render={({ field }) => (
              <SelectCombined
                label={'Страна'}
                disabled={disabled}
                placeholder={'Страна'}
                className={'basis-1/2'}
                options={countriesSelectOptions}
                {...field}
              />
            )}
            name={'Страна'}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Input
                className={'basis-1/2'}
                label={'Город'}
                {...field}
              />
            )}
            name={'Город'}
            control={control}
          />
        </div>
        <div className={'flex gap-6'}>
          <Controller
            render={({ field }) => (
              <Input
                label={'Зарплата'}
                {...field}
                onFocus={(e) => {
                  const value = e.target.value;
                  if (value.includes(' руб/мес')) {
                    field.onChange(
                      value.replace(' руб/мес', ''),
                    );
                  }
                }}
                onBlur={(e) => {
                  const value = e.target.value;
                  field.onChange(value + ' руб/мес');
                }}
              />
            )}
            name={'Зарплата'}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Input
                label={'Еженедельная зарплата'}
                {...field}
                onFocus={(e) => {
                  const value = e.target.value;
                  if (value.includes(' руб/нед')) {
                    field.onChange(
                      value.replace(' руб/нед', ''),
                    );
                  }
                }}
                onBlur={(e) => {
                  const value = e.target.value;
                  field.onChange(value + ' руб/нед');
                }}
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
