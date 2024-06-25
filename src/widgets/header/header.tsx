import React, { memo } from 'react';
import { cn } from '@/shared/utils';
import { Logo } from '@/shared/assets/logo';
import { Button } from '@/shared/ui/button';

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
      <div>
        <Button className={'mr-[8px]'}>создать счет</Button>
        <Button>корзина</Button>
      </div>
    </header>
  );
});
