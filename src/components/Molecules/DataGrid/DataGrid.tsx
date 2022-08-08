import React, { Children, ReactNode } from 'react';
import {
  CheckBoxOutlineBlankIcon,
  IndeterminateCheckBoxIcon,
  CheckBoxIcon
} from '../../../svgIcons/Toggle';
import { MoreVertIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';
import { DropDown } from '../../Atoms';

export interface DataGridProps {
  title: string;
  titleTag?: ReactNode;
  date: ReactNode;
  moreIcon?: ReactNode;
  moreOptions?: ReactNode;
  customMoreButton?: ReactNode;
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
  moreOptions,
  customMoreButton,
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
  const titleClass = classNames({ 'font-bold': !inactive });

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
              {!inactive && <div className="data-grid__list-item" />}
              <div className={titleClass} data-testid="title">
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
        {moreOptions ? (
          <DropDown
            dropDownTitle={moreIcon}
            buttonClassName="justify-center"
            optionsSide="left"
            arrowIcon={<></>}
          >
            {moreOptions}
          </DropDown>
        ) : customMoreButton ? (
          customMoreButton
        ) : null}
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
          <div className="tb2:flex hidden">Štítky</div>
          <div className="data-grid__date">Dátum</div>
        </div>
      </div>
      {renderedChildren}
    </div>
  );
}

export default DataGrid;
