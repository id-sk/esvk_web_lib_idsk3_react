import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';
import { PlaceholderIcon } from '../../../svgIcons';

export interface TertiaryIconButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning';
}

const TertiaryIconButton = ({
  variant = 'basic',
  size = 'medium',
  className,
  icon = <PlaceholderIcon />,
  ...props
}: TertiaryIconButtonProps) => {
  return (
    <BaseButton
      {...props}
      icon={icon}
      className={classNames(
        {
          'tertiary-icon-button--basic': variant == 'basic',
          'tertiary-icon-button--success': variant == 'success',
          'tertiary-icon-button--warning': variant == 'warning',
          'icon-button--medium': size == 'medium',
          'icon-button--large': size == 'large'
        },
        className
      )}
    />
  );
};

export default TertiaryIconButton;
