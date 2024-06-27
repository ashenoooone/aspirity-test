import React, { useState, useEffect, useRef } from 'react';
import type { MouseEventHandler } from 'react';

import { Chevron } from '@/shared/assets/chevron';
import { cn } from '@/shared/utils';
import { Ok } from '@/shared/assets/ok';

type Option = {
  title: string;
  value: string;
};
type OptionProps = {
  option: Option;
  checked?: boolean;
  onClick: (value: Option['value']) => void;
};
const OptionEl = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
    checked,
  } = props;
  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick =
    (
      clickedValue: Option['value'],
    ): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (
        document.activeElement === option &&
        event.key === 'Enter'
      ) {
        onClick(value);
      }
    };

    option.addEventListener('keydown', handleEnterKeyDown);
    return () => {
      option.removeEventListener(
        'keydown',
        handleEnterKeyDown,
      );
    };
  }, [value, onClick]);

  return (
    <li
      className={
        'bg-bg px-[16px] py-[8px] text-body-1 flex items-center justify-between leading-body-1 cursor-pointer hover:bg-state-transparent-contrast-hover'
      }
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      data-testid={`select-option-${value}`}
      ref={optionRef}
    >
      {title}
      {checked && <Ok className={'text-text-accent'} />}
    </li>
  );
};

type SelectDirection = 'top' | 'right' | 'bottom' | 'left';

type SelectProps = {
  selected?: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: 'rows' | 'cells';
  status?: 'default' | 'invalid';
  onChange?: (selected: Option['value']) => void;
  onClose?: () => void;
  icon?: React.ReactNode;
  direction?: SelectDirection;
  disabled?: boolean;
};

export const _select = (props: SelectProps) => {
  const {
    mode = 'rows',
    options,
    placeholder,
    status = 'default',
    selected,
    onChange,
    onClose,
    icon,
    direction = 'bottom',
    disabled,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (
        target instanceof Node &&
        !rootRef.current?.contains(target)
      ) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsOpen((prev) => !prev);
      }
    };
    placeholderEl.addEventListener(
      'keydown',
      handleEnterKeyDown,
    );

    return () => {
      placeholderEl.removeEventListener(
        'keydown',
        handleEnterKeyDown,
      );
    };
  }, []);

  const handleOptionClick = (value: Option['value']) => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<
    HTMLDivElement
  > = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(
        'relative w-full text-text-secondary text-body-2leading-body-2 font-medium hover:border-icon-secondary rounded-[4px] outline-none border border-border-primary',
        {
          'px-[14px] py-[8px]': icon === undefined,
        },
      )}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
      data-testid="selectWrapper"
      onClick={handlePlaceHolderClick}
    >
      <div
        className={
          'absolute right-[19px] top-1/2 -translate-y-1/2'
        }
      >
        <Chevron />
      </div>
      <div
        className={cn(
          'transition-all px-[4px] text-text-secondary font-medium absolute top-1/2 -translate-y-1/2 bg-bg',
          {
            'top-0': !selected,
          },
        )}
        data-status={status}
        data-selected={!!selected?.value}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        {selected?.title || placeholder}
      </div>
      {isOpen && (
        <ul
          className={cn(
            'absolute border list-none border-border-primary bg-none w-full m-0 p-0 box-border z-10 left-0 rounded-[4px] overflow-hidden',
            {
              'bottom-[calc(100%+7px)]':
                direction === 'top',
              'left-[calc(100%+7px)] top-0 -translate-y-1/2':
                direction === 'right',
              'top-[calc(100%+7px)]':
                direction === 'bottom',
              'right-[calc(100%+7px)] top-0 -translate-y-1/2':
                direction === 'left',
              'pointer-events-none opacity-[32%]': disabled,
            },
          )}
          data-testid="selectDropdown"
        >
          {options.map((option) => (
            <OptionEl
              checked={selected?.value === option.value}
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
