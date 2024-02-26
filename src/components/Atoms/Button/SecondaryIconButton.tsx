import React, { forwardRef } from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';
import { PlaceholderIcon } from '../../../svgIcons';

export interface SecondaryIconButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning' | 'contrast';
}

const SecondaryIconButton = forwardRef<HTMLButtonElement, SecondaryIconButtonProps>(
  (
    { variant = 'basic', size = 'medium', className, icon = <PlaceholderIcon />, ...props },
    ref
  ) => {
    return (
      <BaseButton
        {...props}
        ref={ref}
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
  }
);

export default SecondaryIconButton;
