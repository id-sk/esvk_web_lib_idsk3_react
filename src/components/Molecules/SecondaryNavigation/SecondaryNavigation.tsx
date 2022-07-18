import React, { useState, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

import { DropDown } from '../../Atoms';
import { ArrowDropDownIcon } from '../../../svgIcons/Navigation';

export interface SecondaryNavProps extends React.AllHTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  headingButton?: ReactNode;
  mobileHeading?: ReactNode;
  mobileHeadingButton?: ReactNode;
  dropDownTitle?: string;
  dropDownOptions?: ReactElement[];
  bodyClassName?: string;
}

const SecondaryNavigation = ({
  children,
  heading,
  headingButton,
  mobileHeading,
  mobileHeadingButton,
  dropDownTitle,
  dropDownOptions = [],
  className,
  bodyClassName,
  ...props
}: SecondaryNavProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className={classNames('secondary-navigation', className)} {...props}>
      <div className="secondary-navigation__header">
        <div className="secondary-navigation__heading">
          {mobileHeading ? (
            <>
              <span className="tb1:hidden">{mobileHeading}</span>
              <span className="hidden tb1:inline">{heading}</span>
            </>
          ) : (
            heading
          )}{' '}
          {!!headingButton && (
            <button
              className="secondary-navigation__heading-button"
              onClick={() => setOpened((p) => !p)}
            >
              {mobileHeadingButton ? (
                <>
                  <span className="tb1:hidden">{mobileHeadingButton}</span>
                  <span className="hidden tb1:inline">{headingButton}</span>
                </>
              ) : (
                headingButton
              )}{' '}
              <ArrowDropDownIcon
                className={classNames('secondary-navigation__heading-button-icon', {
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
        className={classNames('secondary-navigation__body', bodyClassName, { hidden: !opened })}
        data-testid="secnav-children"
      >
        {children}
      </div>
    </div>
  );
};

export default SecondaryNavigation;
