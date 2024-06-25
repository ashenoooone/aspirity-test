import React, { memo } from 'react';
import { cn } from '@/shared/utils';
import { Logo } from '@/shared/assets/logo';
import { Button } from '@/shared/ui/button';
import { Burger } from '@/shared/assets/burger';

interface HeaderProps {
  className?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { className = '' } = props;
  return (
    <header
      className={cn(
        className,
        'px-[16px] py-[24px] flex justify-between',
      )}
    >
      <Logo />
      <div className={'flex'}>
        <Button className={'mr-[8px]'}>создать счет</Button>
        <Button className={'mr-[8px]'}>корзина</Button>
        <Button variant={'transparent'}>
          <Burger />
        </Button>
      </div>
    </header>
  );
});
