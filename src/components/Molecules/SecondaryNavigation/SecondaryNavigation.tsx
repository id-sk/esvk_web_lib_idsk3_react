import React, { useState, ReactElement } from 'react';
import classNames from 'classnames';

import { DropDown } from '../../Atoms';
import { ArrowDropDownIcon } from '../../../svgIcons/Navigation';

export interface SecondaryNavProps extends React.AllHTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
  title?: string;
  titleButton?: string;
  dropDownTitle?: string;
  dropDownOptions?: ReactElement[];
}

const SecondaryNavigation = ({
  fixed = false,
  children,
  title,
  titleButton,
  dropDownTitle,
  dropDownOptions = [],
  ...props
}: SecondaryNavProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className={classNames('secondary-navigation', { sticky: fixed })}>
      <div className="secondary-navigation__header" {...props}>
        <div className="secondary-navigation__title">
          {title}{' '}
          {!!titleButton && (
            <button
              className="secondary-navigation__title-button"
              onClick={() => setOpened((p) => !p)}
            >
              {titleButton}{' '}
              <ArrowDropDownIcon
                className={classNames('secondary-navigation__title-button-icon', {
                  'rotate-180': opened
                })}
              />
            </button>
          )}
        </div>
        <DropDown dropDownTitle={dropDownTitle} className="secondary-navigation__dropdown">
          {dropDownOptions.length &&
            dropDownOptions.map((item, index) => React.cloneElement(item, { key: index }))}
        </DropDown>
      </div>
      <div
        className={classNames('secondary-navigation__body', { hidden: !opened })}
        data-testid="secnav-children"
      >
        {children}
      </div>
    </div>
  );
};

export default SecondaryNavigation;
