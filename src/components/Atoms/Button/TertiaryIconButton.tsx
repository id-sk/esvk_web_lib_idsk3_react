import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';
import { PlaceholderIcon } from '../../../svgIcons';

export interface TertiaryIconButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning' | 'neutral';
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
        'idsk-tertiary-icon-button',
        {
          'idsk-tertiary-icon-button--basic': variant == 'basic',
          'idsk-tertiary-icon-button--success': variant == 'success',
          'idsk-tertiary-icon-button--warning': variant == 'warning',
          'idsk-tertiary-icon-button--neutral': variant == 'neutral',
          'idsk-icon-button--medium': size == 'medium',
          'idsk-icon-button--large': size == 'large'
        },
        className
      )}
    />
  );
};

export default TertiaryIconButton;
