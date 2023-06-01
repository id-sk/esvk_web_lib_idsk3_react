import React, { AllHTMLAttributes } from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from '../../Atoms/Button/BaseButton';
import { DropDown } from '../../Atoms';
import { ExpandMoreIcon } from '../../../svgIcons/Navigation';

export interface HorizontalNavigationItemProps extends BaseButtonProps {
  active?: boolean;
  hideLabelOnMobile?: boolean;
}
export const HorizontalNavigationItem = ({
  className,
  active = false,
  hideLabelOnMobile = false,
  ...props
}: HorizontalNavigationItemProps) => {
  const elementClasses = classNames(
    'idsk-horizontal-navigation-item',
    {
      'idsk-horizontal-navigation--hide-label-on-mobile': hideLabelOnMobile,
      'idsk-horizontal-navigation-item--active': active
    },
    className
  );

  return <BaseButton buttonElementProps={{ role: 'tab' }} {...props} className={elementClasses} />;
};

export interface HorizontalNavigationGroupProps extends AllHTMLAttributes<HTMLDivElement> {
  dropdownOnMobile?: boolean;
  dropdownLabel?: string;
  hideLabelOnMobile?: boolean;
}

export const HorizontalNavigationGroup = ({
  dropdownOnMobile = true,
  dropdownLabel = 'Missing label',
  hideLabelOnMobile = false,
  className,
  children,
  ...props
}: HorizontalNavigationGroupProps) => {
  return (
    <div
      role="tablist"
      {...props}
      className={classNames('idsk-horizontal-navigation-group', {
        'idsk-horizontal-navigation-group--hide-on-mobile': dropdownOnMobile,
        'idsk-horizontal-navigation--hide-label-on-mobile': hideLabelOnMobile
      })}
    >
      {dropdownOnMobile && (
        <DropDown
          dropDownTitle={dropdownLabel}
          arrowIcon={<ExpandMoreIcon className="idsk-navigation__arrow-icon" />}
        >
          {children}
        </DropDown>
      )}
      {children}
    </div>
  );
};

export interface HorizontalNavigationProps extends AllHTMLAttributes<HTMLDivElement> {
  dropdownOnMobile?: boolean;
  mobileView?: 'grid' | 'list';
}

export const HorizontalNavigation = ({
  children,
  className,
  mobileView = 'list',
  ...props
}: HorizontalNavigationProps) => {
  return (
    <div
      {...props}
      className={classNames(
        'idsk-horizontal-navigation',
        {
          'idsk-horizontal-navigation--list-view': mobileView == 'list',
          'idsk-horizontal-navigation--grid-view': mobileView == 'grid'
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default HorizontalNavigation;
