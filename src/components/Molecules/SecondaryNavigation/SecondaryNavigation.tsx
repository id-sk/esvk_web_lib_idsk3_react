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
    <div className={classNames('idsk-secondary-navigation', className)} {...props}>
      <div className="idsk-secondary-navigation__header">
        <div className="idsk-secondary-navigation__heading">
          <div className="idsk-secondary-navigation__heading-title">
            {mobileHeading ? (
              <>
                <span className="idsk-secondary-navigation__heading-mobile">{mobileHeading}</span>
                <span className="idsk-secondary-navigation__heading-desktop">{heading}</span>
              </>
            ) : (
              heading
            )}{' '}
            {!!headingButton && (
              <button
                className="idsk-secondary-navigation__heading-button"
                onClick={() => setOpened((p) => !p)}
                id={id ? id + '-heading-button' : undefined}
                aria-expanded={opened}
                aria-controls={id ? id + '-body' : undefined}
                aria-label={heading + ' ' + headingButton}
              >
                {mobileHeadingButton ? (
                  <>
                    <span className="idsk-secondary-navigation__heading-mobile">
                      {mobileHeadingButton}
                    </span>
                    <span className="idsk-secondary-navigation__heading-desktop">
                      {headingButton}
                    </span>
                  </>
                ) : (
                  headingButton
                )}{' '}
                <ArrowDropDownIcon
                  className={classNames('idsk-secondary-navigation__heading-button-icon', {
                    'rotate-180': opened
                  })}
                />
              </button>
            )}
          </div>
          <div
            id={id ? id + '-body' : undefined}
            className={classNames('idsk-secondary-navigation__body', bodyClassName, {
              hidden: !opened
            })}
            data-testid="secnav-children"
          >
            {children}
          </div>
        </div>
        <DropDown
          id={id ? id : undefined}
          dropDownTitle={dropDownTitle}
          className="idsk-secondary-navigation__dropdown"
          closeOnOptionClick={true}
        >
          {dropDownOptions.length &&
            dropDownOptions.map((item, index) => React.cloneElement(item, { key: index }))}
        </DropDown>
      </div>
    </div>
  );
};

export default SecondaryNavigation;
