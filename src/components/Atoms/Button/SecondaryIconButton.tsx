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
          'idsk-secondary-icon-button--basic': variant == 'basic',
          'idsk-secondary-icon-button--success': variant == 'success',
          'idsk-secondary-icon-button--warning': variant == 'warning',
          'idsk-secondary-icon-button--contrast': variant == 'contrast',
          'idsk-secondary-icon-button--medium': size == 'medium',
          'idsk-secondary-icon-button--large': size == 'large'
        },
        className
      )}
    />
  );
};

export default SecondaryIconButton;
