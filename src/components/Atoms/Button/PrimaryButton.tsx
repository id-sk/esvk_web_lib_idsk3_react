import React, { forwardRef } from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';

export interface PrimaryButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning';
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ variant = 'basic', size = 'medium', iconPosition = 'left', ...props }, ref) => {
    const className = classNames(
      'idsk-primary-button',
      {
        'idsk-primary-button--basic': variant == 'basic',
        'idsk-primary-button--success': variant == 'success',
        'idsk-primary-button--warning': variant == 'warning',
        'idsk-primary-button--medium': size == 'medium',
        'idsk-primary-button--large': size == 'large',
        'idsk-primary-button--icon-left': props.icon && iconPosition == 'left',
        'idsk-primary-button--icon-right': props.icon && iconPosition == 'right'
      },
      props.className
    );

    return <BaseButton ref={ref} {...props} className={className} />;
  }
);

export default PrimaryButton;
