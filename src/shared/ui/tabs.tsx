import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import { cn } from '@/shared/utils';
import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';

interface TabsProps {
  className?: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
  tabs: string[];
}

export const Tabs: React.FC<TabsProps> = ({
  activeTab,
  setActiveTab,
  className,
  tabs,
}) => {
  return (
    <div
      className={cn(
        'flex overflow-x-scroll [&::-webkit-scrollbar]:hidden whitespace-nowrap max-w-full flex-no-wrap',
        className,
      )}
    >
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            className={cn(
              'border-b-2 text-text-secondary cursor-pointer transition-all hover:text-text-primary font-semibold uppercase px-[16px] py-[10px]',
              {
                'text-text-primary border-b-border-accent':
                  tab === activeTab,
              },
              className,
            )}
            onClick={() => setActiveTab(tab)}
          >
            <Typography variant={'button'}>
              {tab}
            </Typography>
          </button>
        );
      })}
    </div>
  );
};
