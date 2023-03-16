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
    <div {...props} className={classNames('idsk-table', className)}>
      {heading && <h3 className="idsk-table__heading">{heading}</h3>}
      {headRow && <div className="idsk-table__head">{headRow}</div>}
      <div className="idsk-table__rows">{children}</div>
      {actions && <div className="idsk-table__actions">{actions}</div>}
    </div>
  );
}

export const TableRow = ({ children, className, ...props }: TableProps) => {
  return (
    <div {...props} className={classNames('idsk-table__row', className)}>
      {children}
    </div>
  );
};

export const TableRowValue = ({ align, className, children, ...props }: TableProps) => {
  return (
    <div
      {...props}
      className={classNames(
        'idsk-table__value',
        {
          'idsk-table__value--right-align': align == 'right'
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Table;
