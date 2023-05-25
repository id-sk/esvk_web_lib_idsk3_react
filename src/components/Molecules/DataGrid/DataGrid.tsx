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
    <td
      className={classNames(
        'idsk-data-grid__value',
        {
          'idsk-data-grid__value--right-align': align == 'right'
        },
        className
      )}
      {...props}
    >
      {children}
      {information && <InfoIcon className="w-6 h-6" />}
    </td>
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
    'idsk-data-grid-row',
    { 'idsk-data-grid-row--without-head': !props.headRow },
    { 'idsk-data-grid-row--active': active },
    { 'idsk-data-grid-row--active-no-checkbox': active && !checkbox },
    { 'idsk-data-grid-row--checked': checked },
    className
  );
  const noCheckboxClasses = classNames(
    'idsk-data-grid-row__dot-wrapper',
    { 'idsk-data-grid-row__dot-wrapper--no-checkbox': active && !checkbox },
    className
  );
  return (
    <tr className={dataGridClasses} id={id} {...props}>
      {checkbox && (
        <td>
          <Checkbox
            name="checkbox"
            checked={checked}
            onChange={onChange}
            id={id ? id + '-checkbox' : undefined}
          />
        </td>
      )}
      {!!active && !!activeDotVisibility && (
        <td className={noCheckboxClasses}>
          <div
            className={classNames('idsk-data-grid-row__dot', {
              'idsk-data-grid-row__dot--active': active
            })}
          />
        </td>
      )}
      {children}
      <td>
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
          <div className="idsk-data-grid-row__dropdown-space" />
        )}
      </td>
    </tr>
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
    <table className={classNames('idsk-data-grid', className)} id={id} {...props}>
      {headRow && (
        <th className="idsk-data-grid__head">
          {checkboxEverything && (
            <td>
              <Checkbox
                name="checkbox"
                checked={checked}
                onChange={handleSelectAllChange}
                hasUncheckIcon={hasUncheckIcon}
                id={id ? id + '-checkbox-all' : undefined}
              />
            </td>
          )}
          {headRow}
        </th>
      )}
      {renderedChildren}
    </table>
  );
}

export default DataGrid;
