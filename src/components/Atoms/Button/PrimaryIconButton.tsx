import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';
import { PlaceholderIcon } from '../../../svgIcons';

export interface PrimaryIconButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning';
}

const PrimaryIconButton = ({
  variant = 'basic',
  size = 'medium',
  className,
  icon = <PlaceholderIcon />,
  ...props
}: PrimaryIconButtonProps) => {
  return (
    <BaseButton
      {...props}
      icon={icon}
      className={classNames(
        {
          'primary-icon-button--basic': variant == 'basic',
          'primary-icon-button--success': variant == 'success',
          'primary-icon-button--warning': variant == 'warning',
          'icon-button--medium': size == 'medium',
          'icon-button--large': size == 'large'
        },
        className
      )}
    />
  );
};

export default PrimaryIconButton;
