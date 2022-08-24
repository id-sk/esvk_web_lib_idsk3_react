import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface TableProps extends React.AllHTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  headRow?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  align?: 'left' | 'right';
}
export function Table({
  children,
  heading,
  headRow,
  actions,
  id,
  className,
  ...props
}: TableProps) {
  return (
    <div {...props} className={classNames('table', className)}>
      {heading && <h3 className="table__heading">{heading}</h3>}
      {headRow && <div className="table__head">{headRow}</div>}
      <div className="table__rows">{children}</div>
      {actions && <div className="table__actions">{actions}</div>}
    </div>
  );
}

export const TableRow = ({ children, className, ...props }: TableProps) => {
  return (
    <div {...props} className={classNames('table_row', className)}>
      {children}
    </div>
  );
};

export const TableRowValue = ({ align, className, children, ...props }: TableProps) => {
  return (
    <div
      {...props}
      className={classNames(
        'table__value',
        {
          'table__value--right-align': align == 'right'
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Table;
