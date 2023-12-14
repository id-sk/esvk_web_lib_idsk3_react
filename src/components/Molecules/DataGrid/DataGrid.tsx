import React, { Children, ReactNode } from 'react';
import { MoreVertIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';
import { Checkbox, DropDown, Tag, Tooltip } from '../../Atoms';
import { InfoIcon } from '../../../svgIcons/Actions';
import BaseButton, { BaseButtonProps } from '../../Atoms/Button/BaseButton';

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

export interface RowButtonProps extends BaseButtonProps {
  skipedElements?: string[];
}

export interface DataGridRowProps extends React.AllHTMLAttributes<HTMLDivElement>, DataGridProps {
  moreIcon?: ReactNode;
  moreOptions?: ReactNode;
  moreOptionsTooltip?: string;
  customMoreButton?: ReactNode;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  checked?: boolean;
  active?: boolean;
  checkbox?: boolean;
  activeDotVisibility?: boolean;
  buttonProps?: RowButtonProps;
}

export function DataGridRow({
  children,
  moreIcon = <MoreVertIcon />,
  moreOptions,
  moreOptionsTooltip,
  customMoreButton,
  checked,
  onChange,
  buttonProps,
  active,
  checkbox,
  checkboxTooltip,
  className,
  activeDotVisibility = false,
  id,
  ...props
}: DataGridRowProps) {
  const dataGridClasses = classNames(
    'idsk-data-grid-row',
    { 'idsk-data-grid-row--active': active },
    { 'idsk-data-grid-row--active-no-checkbox': active && !checkbox },
    { 'idsk-data-grid-row--checked': checked },
    { 'idsk-data-grid-row--clickable': !!buttonProps },
    className
  );
  const noCheckboxClasses = classNames(
    'idsk-data-grid-row__dot-wrapper',
    { 'idsk-data-grid-row__dot-wrapper--no-checkbox': active && !checkbox },
    className
  );
  const Check = () => (
    <Checkbox
      name="checkbox"
      checked={checked}
      onChange={onChange}
      id={id ? id + '-checkbox' : undefined}
    />
  );

  const handleRowClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const tagName = (event.target as HTMLElement)?.tagName ?? '';
    const skipepdTags = buttonProps?.skipedElements || ['INPUT', 'path', 'svg'];
    if (!!buttonProps?.onClick && !skipepdTags.includes(tagName)) {
      buttonProps.onClick(event);
    }
  };

  const dataGridRowBody = (
    <>
      {checkbox && (
        <td>
          {!!checkboxTooltip ? (
            <Tooltip tooltip={checkboxTooltip} isInstructive>
              <Check />
            </Tooltip>
          ) : (
            <Check />
          )}
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
            dropDownTitle={
              !!moreOptionsTooltip ? (
                <Tooltip tooltip={moreOptionsTooltip} isInstructive>
                  {moreIcon}
                </Tooltip>
              ) : (
                moreIcon
              )
            }
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
    </>
  );

  return (
    <tr
      className={!buttonProps ? dataGridClasses : 'idsk-data-grid-row__click-wrapper'}
      id={id}
      {...props}
    >
      {!!buttonProps ? (
        <BaseButton
          {...buttonProps}
          className={classNames(dataGridClasses, buttonProps.className)}
          onClick={handleRowClick}
        >
          {dataGridRowBody}
        </BaseButton>
      ) : (
        dataGridRowBody
      )}
    </tr>
  );
}

export interface DataGridProps extends React.AllHTMLAttributes<HTMLDivElement> {
  checkboxEverything?: boolean;
  checkboxTooltip?: string;
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
  checkboxTooltip,
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
  const CheckAll = () => (
    <Checkbox
      name="checkbox"
      checked={checked}
      onChange={handleSelectAllChange}
      hasUncheckIcon={hasUncheckIcon}
      id={id ? id + '-checkbox-all' : undefined}
    />
  );
  return (
    <table className={classNames('idsk-data-grid', className)} id={id} {...props}>
      {headRow && (
        <thead>
          <tr className="idsk-data-grid__head">
            {checkboxEverything && (
              <th>
                {!!checkboxTooltip ? (
                  <Tooltip tooltip={checkboxTooltip} isInstructive>
                    <CheckAll />
                  </Tooltip>
                ) : (
                  <CheckAll />
                )}
              </th>
            )}
            {headRow}
          </tr>
        </thead>
      )}
      <tbody className={classNames({ 'idsk-data-grid__body--without-head': !headRow })}>
        {renderedChildren}
      </tbody>
    </table>
  );
}

export default DataGrid;
