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
  id,
  ...props
}: SecondaryNavProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className={classNames('secondary-navigation', className)} {...props}>
      <div className="secondary-navigation__header">
        <div className="secondary-navigation__heading">
          {mobileHeading ? (
            <>
              <span className="secondary-navigation__heading-mobile">{mobileHeading}</span>
              <span className="secondary-navigation__heading-desktop">{heading}</span>
            </>
          ) : (
            heading
          )}{' '}
          {!!headingButton && (
            <button
              className="secondary-navigation__heading-button"
              onClick={() => setOpened((p) => !p)}
              id={id ? id + '-heading-button' : undefined}
              aria-expanded={opened}
              aria-controls={id ? id + '-body' : undefined}
            >
              {mobileHeadingButton ? (
                <>
                  <span className="secondary-navigation__heading-mobile">
                    {mobileHeadingButton}
                  </span>
                  <span className="secondary-navigation__heading-desktop">{headingButton}</span>
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
        <DropDown
          id={id ? id + '-dropdown' : undefined}
          dropDownTitle={dropDownTitle}
          className="secondary-navigation__dropdown"
          closeOnOptionClick={true}
        >
          {dropDownOptions.length &&
            dropDownOptions.map((item, index) => React.cloneElement(item, { key: index }))}
        </DropDown>
      </div>
      <div
        id={id ? id + '-body' : undefined}
        className={classNames('secondary-navigation__body', bodyClassName, { hidden: !opened })}
        data-testid="secnav-children"
      >
        {children}
      </div>
    </div>
  );
};

export default SecondaryNavigation;
