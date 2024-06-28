'use client';
import React, {
  createContext,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { UserType } from '@/entities/user';
import { UserProfileHeader } from './user-profile-header';
import { cn } from '@/shared/utils';
import { UserMainInformation } from '@/entities/user/ui/user-main-information/user-main-information';
import { UserVacation } from '@/entities/user/ui/user-vacation/user-vacation';
import { useCountriesStore } from '@/entities/countries/countries.store';
import { UserEquipment } from '@/entities/user/ui/user-equipment/user-equipment';

interface UserProfileProps {
  className?: string;
  user: UserType;
  countries?: string[];
}

type TabsType =
  | 'Основная информация'
  | 'Отпуск'
  | 'Оборудование';

const tabs: TabsType[] = [
  'Основная информация',
  'Отпуск',
  'Оборудование',
];

export const UserProfile = memo(
  (props: UserProfileProps) => {
    const { className = '', user, countries } = props;

    useCountriesStore.use.setCountries()(countries);

    const [activeTab, setActiveTab] =
      useState<TabsType>('Оборудование');

    const onChangeActiveTab = useCallback(
      (newTab: string) => {
        setActiveTab(newTab as TabsType);
      },
      [],
    );

    const content = useMemo(() => {
      if (activeTab === 'Основная информация') {
        return (
          <UserMainInformation
            userMainInformation={
              user['Основная информация']
            }
            userContacts={user['Контакты']}
            userDepartments={user['Подразделение']}
            userUpload={user['Загрузка сотрудника']}
            userPersonalInformation={
              user['Персональная информация']
            }
          />
        );
      }
      if (activeTab === 'Отпуск') {
        return (
          <UserVacation userVacation={user['Отпуск']} />
        );
      }
      if (activeTab === 'Оборудование') {
        return (
          <UserEquipment
            userEquipment={user.Оборудование}
          />
        );
      }
    }, [activeTab, user]);

    return (
      <div className={cn(className, 'flex flex-col gap-4')}>
        <UserProfileHeader
          tabs={tabs}
          currentActiveTab={activeTab}
          setCurrentActiveTab={onChangeActiveTab}
          userMainInformation={user['Основная информация']}
        />
        <div>{content}</div>
      </div>
    );
  },
);
