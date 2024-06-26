import React, { memo } from 'react';
import { UserContacts as TUserContacts } from '../../types';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { cn } from '@/shared/utils';
import { Input } from '@/shared/ui/input';

interface UserContactsFormProps {
  className?: string;
  userContacts: TUserContacts;
  disabled?: boolean;
}

type UserContactsFormValues = TUserContacts;

export const UserContactsForm = memo(
  (props: UserContactsFormProps) => {
    const {
      className = '',
      userContacts,
      disabled,
    } = props;

    const { control, handleSubmit } =
      useForm<UserContactsFormValues>({
        disabled: disabled,
        defaultValues: {
          'Номер телефона': userContacts['Номер телефона'],
          Slack: userContacts.Slack,
          Telegram: userContacts.Telegram,
          'Электронная почта':
            userContacts['Электронная почта'],
        },
      });

    const onSubmit: SubmitHandler<
      UserContactsFormValues
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
              <Input label={'Номер телефона'} {...field} />
            )}
            name={'Номер телефона'}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Input
                label={'Электронная почта'}
                {...field}
              />
            )}
            name={'Электронная почта'}
            control={control}
          />
        </div>
        <div className={'flex gap-6'}>
          <Controller
            render={({ field }) => (
              <Input label={'Telegram'} {...field} />
            )}
            name={'Telegram'}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Input label={'Slack'} {...field} />
            )}
            name={'Slack'}
            control={control}
          />
        </div>
      </form>
    );
  },
);
