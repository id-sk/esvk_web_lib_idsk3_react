import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';

export interface SecondaryButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning' | 'contrast';
}

const defaultButtonProps: SecondaryButtonProps = {
  variant: 'basic',
  size: 'medium',
  iconPosition: 'left'
};

const SecondaryButton = (props: SecondaryButtonProps) => {
  props = { ...defaultButtonProps, ...props };

  return (
    <BaseButton
      className={classNames('secondary-button', {
        'secondary-button--basic': props.variant == 'basic',
        'secondary-button--success': props.variant == 'success',
        'secondary-button--warning': props.variant == 'warning',
        'secondary-button--contrast': props.variant == 'contrast',
        'secondary-button--medium': props.size == 'medium',
        'secondary-button--large': props.size == 'large',
        'secondary-button--icon-left': props.icon && props.iconPosition == 'left',
        'secondary-button--icon-right': props.icon && props.iconPosition == 'right'
      })}
      {...props}
    />
  );
};

export default SecondaryButton;
