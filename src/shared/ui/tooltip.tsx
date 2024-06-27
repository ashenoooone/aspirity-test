import React, {
  ComponentProps,
  ReactNode,
  useRef,
} from 'react';
import { cn } from '@/shared/utils';

type OmitDivProps = Omit<ComponentProps<'div'>, 'content'>;

type TooltipDirection =
  | 'top'
  | 'top-left'
  | 'top-center'
  | 'right'
  | 'bottom'
  | 'left';

interface TooltipProps extends OmitDivProps {
  content: ReactNode;
  trigger: ReactNode;
  className?: string;
  delay?: number;
  direction?: TooltipDirection;
}

export const Tooltip = (props: TooltipProps) => {
  const {
    content,
    trigger,
    className = '',
    direction = 'top',
    delay = 300,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)} {...rest}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          className={cn(
            'absolute px-[10px] py-[6px] z-50 mt-2 bg-primary bg-bg-modal rounded-[4px]',
            {
              'bottom-[calc(100%+7px)]':
                direction === 'top',
              'bottom-[calc(100%+7px)] right-full':
                direction === 'top-left',
              'bottom-[calc(100%+7px)] right-1/2 translate-x-1/2':
                direction === 'top-center',
              'left-[calc(100%+7px)] top-0 -translate-y-1/2':
                direction === 'right',
              'top-[calc(100%+7px)]':
                direction === 'bottom',
              'right-[calc(100%+7px)] top-0 -translate-y-1/2':
                direction === 'left',
            },
            className,
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
