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
import { UserMainInformation } from '@/entities/user/ui/user-main-information';

interface UserProfileProps {
  className?: string;
  user: UserType;
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
    const { className = '', user } = props;

    const [activeTab, setActiveTab] = useState<TabsType>(
      'Основная информация',
    );

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
        return <div>Отпуск</div>;
      }
      if (activeTab === 'Оборудование') {
        return <div>Оборудование</div>;
      }
    }, [activeTab]);

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
