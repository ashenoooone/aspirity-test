import React, {
  Component,
  ComponentProps,
  memo,
  ReactNode,
} from 'react';
import { cn } from '@/shared/utils';
import { Typography } from '@/shared/ui/typography';
import * as child_process from 'child_process';

export const TableHead = ({
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div
    className={cn(
      'font-medium p-2 border-b border-border-primary whitespace-nowrap',
      className,
    )}
    {...props}
  >
    <Typography
      className={'text-text-secondary '}
      variant={'body-1'}
    >
      {props.children}
    </Typography>
  </div>
);

TableHead.displayName = 'TableHead';

export const TableCell = ({
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div
    className={cn(
      'p-2 border-b border-border-primary',
      className,
    )}
    {...props}
  />
);

TableCell.displayName = 'TableCell';

interface TableColumnProps {
  className?: string;
  header: ReactNode;
  values: ReactNode[];
}
export const TableColumn = memo(
  (props: TableColumnProps) => {
    const { className, header, values } = props;
    return (
      <div className={cn(className)}>
        <TableHead>{header}</TableHead>
        {values.map((v) => (
          <TableCell>{v}</TableCell>
        ))}
      </div>
    );
  },
);
