import React, { ReactNode } from 'react';
import { AddIcon } from '../../../svgIcons/Content';
import { TextButton } from '../Button';

export interface TableProps {
  title?: ReactNode;
  children?: ReactNode;
  addButton?: boolean;
  addButtonLabel?: string;
  alignRight?: boolean;
  titles?: ReactNode;
}

export function Table({ children }: TableProps) {
  return <div className="table-wrapper">{children}</div>;
}
export function TableRowsContainer({ children, ...props }: TableProps) {
  return (
    <div className="table-container">
      <h3>{props.title}</h3>
      <div className="table-head">{props.titles}</div>
      <div className="table-container__children">{children}</div>
      {props.addButton == true && (
        <TextButton
          className="table-container__text-button"
          label={props.addButtonLabel}
          icon={<AddIcon />}
        ></TextButton>
      )}
    </div>
  );
}

export const TableRow = ({ ...props }: TableProps) => {
  return <div className="table-content">{props.children}</div>;
};

export const TableRowItem = ({ ...props }: TableProps) => {
  return (
    <div>
      {props.alignRight == true ? (
        <div className="table-content__action">{props.children}</div>
      ) : (
        <div>{props.children}</div>
      )}
    </div>
  );
};

export default Table;
