import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';
import { PlaceholderIcon } from '../../../svgIcons';

export interface SecondaryIconButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning' | 'contrast';
}

const SecondaryIconButton = ({
  variant = 'basic',
  size = 'medium',
  className,
  icon = <PlaceholderIcon />,
  ...props
}: SecondaryIconButtonProps) => {
  return (
    <BaseButton
      {...props}
      icon={icon}
      className={classNames(
        {
          'secondary-icon-button--basic': variant == 'basic',
          'secondary-icon-button--success': variant == 'success',
          'secondary-icon-button--warning': variant == 'warning',
          'secondary-icon-button--contrast': variant == 'contrast',
          'secondary-icon-button--medium': size == 'medium',
          'secondary-icon-button--large': size == 'large'
        },
        className
      )}
    />
  );
};

export default SecondaryIconButton;
