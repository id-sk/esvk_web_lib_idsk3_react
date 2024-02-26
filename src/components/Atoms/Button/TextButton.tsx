import React, { forwardRef } from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';

export interface TextButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning' | 'contrast';
}

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ variant = 'basic', size = 'medium', iconPosition = 'left', ...props }, ref) => {
    const className = classNames(
      'idsk-link-button',
      {
        'idsk-link-button--basic': variant == 'basic',
        'idsk-link-button--success': variant == 'success',
        'idsk-link-button--warning': variant == 'warning',
        'idsk-link-button--contrast': variant == 'contrast',
        'idsk-link-button--medium': size == 'medium',
        'idsk-link-button--large': size == 'large',
        'idsk-link-button--icon-left': props.icon && iconPosition == 'left',
        'idsk-link-button--icon-right': props.icon && iconPosition == 'right'
      },
      props.className
    );

    return <BaseButton ref={ref} {...props} className={className} />;
  }
);

export default TextButton;
