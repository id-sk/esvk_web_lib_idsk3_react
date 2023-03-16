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
          'idsk-primary-icon-button--basic': variant == 'basic',
          'idsk-primary-icon-button--success': variant == 'success',
          'idsk-primary-icon-button--warning': variant == 'warning',
          'idsk-icon-button--medium': size == 'medium',
          'idsk-icon-button--large': size == 'large'
        },
        className
      )}
    />
  );
};

export default PrimaryIconButton;
