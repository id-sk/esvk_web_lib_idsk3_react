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
    'horizontal-navigation-item',
    {
      'horizontal-navigation--hide-label-on-mobile': hideLabelOnMobile,
      'horizontal-navigation-item--active': active
    },
    className
  );

  return <BaseButton {...props} className={elementClasses} />;
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
      {...props}
      className={classNames('horizontal-navigation-group', {
        'horizontal-navigation-group--hide-on-mobile': dropdownOnMobile,
        'horizontal-navigation--hide-label-on-mobile': hideLabelOnMobile
      })}
    >
      {dropdownOnMobile && (
        <DropDown
          dropDownTitle={dropdownLabel}
          arrowIcon={<ExpandMoreIcon className="navigation__arrow-icon" />}
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
        'horizontal-navigation',
        {
          'horizontal-navigation--list-view': mobileView == 'list',
          'horizontal-navigation--grid-view': mobileView == 'grid'
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default HorizontalNavigation;
