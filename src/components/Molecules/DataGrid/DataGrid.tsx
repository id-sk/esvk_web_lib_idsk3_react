import React, { Children, ReactNode } from 'react';
import { MoreVertIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';
import { Checkbox, DropDown, Tag } from '../../Atoms';
import { InfoIcon } from '../../../svgIcons/Actions';

interface DataGridTagsProps extends React.AllHTMLAttributes<HTMLDivElement> {
  tags?: { label?: string; key?: number }[];
}

export const DataGridTags = ({ tags }: DataGridTagsProps) => {
  return (
    <>
      {tags?.length &&
        tags.map((tag) => {
          return <Tag label={tag.label} key={tag.key} />;
        })}
    </>
  );
};

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

export interface DataGridRowProps extends React.AllHTMLAttributes<HTMLDivElement>, DataGridProps {
  moreIcon?: ReactNode;
  moreOptions?: ReactNode;
  customMoreButton?: ReactNode;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  checked?: boolean;
  active?: boolean;
  checkbox?: boolean;
  activeDotVisibility?: boolean;
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
  activeDotVisibility = false,
  id,
  ...props
}: DataGridRowProps) {
  const dataGridClasses = classNames(
    'data-grid-row',
    { 'data-grid-row--without-head': !props.headRow },
    { 'data-grid-row--active': active },
    { 'data-grid-row--active-no-checkbox': active && !checkbox },
    { 'data-grid-row--checked': checked },
    className
  );
  const noCheckboxClasses = classNames(
    'data-grid-row__dot-wrapper',
    { 'data-grid-row__dot-wrapper--no-checkbox': active && !checkbox },
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
      {!!active && !!activeDotVisibility && (
        <div className={noCheckboxClasses}>
          <div
            className={classNames('data-grid-row__dot', {
              'data-grid-row__dot--active': active
            })}
          />
        </div>
      )}
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
  hasUncheckIcon?: boolean;
}

function DataGrid({
  children,
  checked,
  onChange,
  onSelectAllCheck,
  headRow,
  className,
  checkboxEverything,
  hasUncheckIcon,
  id,
  ...props
}: DataGridProps) {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
  });
  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelectAllCheck?.(e.currentTarget.checked);
  };
  return (
    <div className={classNames('data-grid', className)} id={id} {...props}>
      {headRow && (
        <div className="data-grid__head">
          {checkboxEverything && (
            <Checkbox
              name="checkbox"
              checked={checked}
              onChange={handleSelectAllChange}
              hasUncheckIcon={hasUncheckIcon}
              id={id ? id + '-checkbox-all' : undefined}
            />
          )}
          {headRow}
        </div>
      )}
      {renderedChildren}
    </div>
  );
}

export default DataGrid;
