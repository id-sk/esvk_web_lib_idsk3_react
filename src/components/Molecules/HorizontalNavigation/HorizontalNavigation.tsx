import React, { AllHTMLAttributes } from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from '../../Atoms/Button/BaseButton';

export interface HorizontalNavigationItemProps extends BaseButtonProps {
  active?: boolean;
}
export const HorizontalNavigationItem = ({
  className,
  active = false,
  ...props
}: HorizontalNavigationItemProps) => {
  const elementClasses = classNames(
    'horizontal-navigation-item',
    {
      'horizontal-navigation-item--active': active
    },
    className
  );

  return <BaseButton {...props} className={elementClasses} />;
};

export const HorizontalNavigationGroup = (props: AllHTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={classNames('horizontal-navigation-group', props.className)} />;
};

export const HorizontalNavigation = ({
  children,
  className,
  ...props
}: AllHTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={classNames('horizontal-navigation', className)}>
      {children}
    </div>
  );
};

export default HorizontalNavigation;
