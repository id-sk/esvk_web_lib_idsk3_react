import React, { Children, ReactNode } from 'react';
import { CheckBoxOutlineBlankIcon, CheckBoxIcon } from '../../../svgIcons/Toggle';
import { MoreVertIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';
import { DropDown } from '../../Atoms';
import { InfoIcon } from '../../../svgIcons/Actions';

export interface DataGridItemValueProps extends React.AllHTMLAttributes<HTMLDivElement> {
  information?: string;
  align?: 'left' | 'right';
  className?: string;
}

export const DataGridItemValue = ({
  align,
  className,
  children,
  information,
  ...props
}: DataGridItemValueProps) => {
  return (
    <div
      className={classNames(
        'data-grid__value',
        {
          'data-grid__value--right-align': align == 'right'
        },
        className
      )}
      {...props}
    >
      {children}
      {information && <InfoIcon className="w-6 h-6" />}
    </div>
  );
};

export interface DataGridItemProps {
  moreIcon?: ReactNode;
  moreOptions?: ReactNode;
  customMoreButton?: ReactNode;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  checked?: boolean;
  active?: boolean;
  checkbox?: boolean;
}

export function DataGridItem({
  children,
  moreIcon = <MoreVertIcon />,
  moreOptions,
  customMoreButton,
  checked,
  onChange,
  active,
  checkbox,
  id,
  ...props
}: DataGridItemProps) {
  const dataGridClasses = classNames(
    'data-grid-item',
    { 'data-grid-item-active': active },
    { 'data-grid-item-checked': checked }
  );
  return (
    <div className={dataGridClasses} id={id} {...props}>
      {checkbox && (
        <label className="data-grid-item__checkbox mt-1">
          <input type="checkbox" checked={checked} onChange={onChange} />
          <CheckBoxOutlineBlankIcon className="data-grid-item__checkbox-icon-blank" />
          <CheckBoxIcon className="data-grid-item__checkbox-icon" />
        </label>
      )}
      <div className="data-grid-item__active-state">
        <div className={!active ? 'data-grid-item--inactive' : 'data-grid-item--active'} />
      </div>
      {children}
      {moreOptions ? (
        <DropDown
          dropDownTitle={moreIcon}
          optionsSide="left"
          arrowIcon={<></>}
          buttonClassName="p-0"
        >
          {moreOptions}
        </DropDown>
      ) : customMoreButton ? (
        customMoreButton
      ) : null}
    </div>
  );
}

export interface DataGridProps extends React.AllHTMLAttributes<HTMLDivElement> {
  checkboxEverything?: boolean;
  onSelectAllCheck?: (checked: boolean) => void;
  headItems?: ReactNode;
}

function DataGrid({ children, checked, onChange, ...props }: DataGridProps) {
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
    <div className="data-grid">
      <div className="data-grid__head">
        {props.checkboxEverything && (
          <label className="data-grid-item__checkbox">
            <input type="checkbox" checked={checked} onChange={handleSelectAllChange} />
            <CheckBoxOutlineBlankIcon className="data-grid-item__checkbox-icon-blank" />
            <CheckBoxIcon className="data-grid-item__checkbox-icon" />
          </label>
        )}
        {props.headItems}
      </div>
      {renderedChildren}
    </div>
  );
}

export default DataGrid;
