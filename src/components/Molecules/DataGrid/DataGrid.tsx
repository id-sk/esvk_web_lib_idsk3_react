import React, { Children, ReactNode } from 'react';
import { CheckBoxOutlineBlankIcon } from '../../../svgIcons/Toggle';
import { IndeterminateCheckBoxIcon } from '../../../svgIcons/Toggle';
import { CheckBoxIcon } from '../../../svgIcons/Toggle';
import { MoreVertIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';

export interface DataGridProps {
  title: string;
  titleTag?: ReactNode;
  date: ReactNode;
  moreIcon?: ReactNode;
  moreOnClick?: React.MouseEventHandler<HTMLElement>;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  checked?: boolean;
  inactive?: boolean;
  tagList?: ReactNode;
}

const DataGrid = ({
  children,
  moreIcon = <MoreVertIcon />,
  checked,
  onChange,
  inactive,
  ...props
}: DataGridProps) => {
  const dataGridClasses = classNames(
    'data-grid',
    { 'data-grid-active': !inactive },
    { 'data-grid-checked': checked }
  );
  const liClasses = classNames('data-grid__li-active', { 'data-grid__li': inactive });
  const titleClasses = classNames(
    { 'data-grid__title-active': !inactive },
    { 'data-grid__title': inactive }
  );

  return (
    <div className={dataGridClasses}>
      <>
        <div className="data-grid__container-left">
          <label className="data-grid__label mt-1">
            <input type="checkbox" checked={checked} onChange={onChange} key={props.id} />
            <CheckBoxOutlineBlankIcon className="data-grid__checkbox-icon-blank" />
            <CheckBoxIcon className="data-grid__checkbox-icon" />
          </label>
          <div>
            <div className="data-grid__title-container">
              <li className={liClasses}></li>
              <div className={titleClasses} data-testid="title">
                {props.title}
              </div>
              {props.titleTag}
            </div>
            {children}
          </div>
        </div>
      </>
      <div className="data-grid__container-right">
        <ul className="data-grid__ul">{props.tagList}</ul>
        <div className="data-grid__date">{props.date}</div>
        <button onClick={props.moreOnClick} data-testid="moreButton">
          {moreIcon}
        </button>
      </div>
    </div>
  );
};

export interface DataGridGroupProps extends React.AllHTMLAttributes<HTMLDivElement> {
  checkBox?: ReactNode;
  checkBoxIconOutline?: ReactNode;
  moreIcon?: ReactNode;
  onSelectAllCheck?: (checked: boolean) => void;
}

export function DataGridGroup({ children, checked, onChange, ...props }: DataGridGroupProps) {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        inGroup: true
      });
    }
  });
  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSelectAllCheck?.(e.currentTarget.checked);
  };
  return (
    <div className="data-grid-group">
      <div className="data-grid-group__header">
        <div className="data-grid-group__container-left">
          <label className="data-grid__label">
            <input type="checkbox" checked={checked} onChange={handleSelectAllChange} />
            <CheckBoxOutlineBlankIcon className="data-grid__checkbox-icon-blank" />
            <IndeterminateCheckBoxIcon className="data-grid__checkbox-icon" />
          </label>
          Odosielateľ
        </div>
        <div className="data-grid-group__container-right">
          Štítky
          <div className="data-grid__date">Dátum</div>
        </div>
      </div>
      {renderedChildren}
    </div>
  );
}

export default DataGrid;
