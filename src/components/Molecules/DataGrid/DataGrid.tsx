import React, { Children, ReactNode } from 'react';
import { MoreVertIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';
import { Checkbox, DropDown } from '../../Atoms';
import { InfoIcon } from '../../../svgIcons/Actions';

export interface DataGridRowValueProps extends React.AllHTMLAttributes<HTMLDivElement> {
  information?: string;
  align?: 'left' | 'right';
  className?: string;
}

export const DataGridRowValue = ({
  align,
  className,
  children,
  information,
  ...props
}: DataGridRowValueProps) => {
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

export interface DataGridRowProps extends React.AllHTMLAttributes<HTMLDivElement> {
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

export function DataGridRow({
  children,
  moreIcon = <MoreVertIcon />,
  moreOptions,
  customMoreButton,
  checked,
  onChange,
  active,
  checkbox,
  className,
  id,
  ...props
}: DataGridRowProps) {
  const dataGridClasses = classNames(
    'data-grid-row',
    { 'data-grid-row--active': active },
    { 'data-grid-row--checked': checked },
    className
  );
  return (
    <div className={dataGridClasses} id={id} {...props}>
      {checkbox && (
        <Checkbox
          name="checkbox"
          checked={checked}
          onChange={onChange}
          id={id ? id + '-checkbox' : undefined}
        />
      )}
      <div className="data-grid-row__dot-wrapper">
        <div
          className={classNames('data-grid-row__dot', {
            'data-grid-row__dot--active': active
          })}
        />
      </div>
      {children}
      {moreOptions ? (
        <DropDown
          dropDownTitle={moreIcon}
          optionsSide="left"
          arrowIcon={<></>}
          id={id ? id + '-more-options' : undefined}
        >
          {moreOptions}
        </DropDown>
      ) : customMoreButton ? (
        customMoreButton
      ) : (
        <div className="data-grid-row__dropdown-space" />
      )}
    </div>
  );
}

export interface DataGridProps extends React.AllHTMLAttributes<HTMLDivElement> {
  checkboxEverything?: boolean;
  onSelectAllCheck?: (checked: boolean) => void;
  headRow?: ReactNode;
}

function DataGrid({
  children,
  checked,
  onChange,
  onSelectAllCheck,
  headRow,
  className,
  checkboxEverything,
  id,
  ...props
}: DataGridProps) {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        inGroup: true
      });
    }
  });
  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelectAllCheck?.(e.currentTarget.checked);
  };
  return (
    <div className={classNames('data-grid', className)} id={id} {...props}>
      <div className="data-grid__head">
        {checkboxEverything && (
          <Checkbox
            name="checkbox"
            checked={checked}
            onChange={handleSelectAllChange}
            id={id ? id + '-checkbox-all' : undefined}
          />
        )}
        {headRow}
      </div>
      {renderedChildren}
    </div>
  );
}

export default DataGrid;
