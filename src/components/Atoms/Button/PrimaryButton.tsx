import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';

export interface PrimaryButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning';
}

const defaultButtonProps: PrimaryButtonProps = {
  variant: 'basic',
  size: 'medium',
  iconPosition: 'left'
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  props = { ...defaultButtonProps, ...props };
  const className = classNames(
    'idsk-primary-button',
    {
      'idsk-primary-button--basic': props.variant == 'basic',
      'idsk-primary-button--success': props.variant == 'success',
      'idsk-primary-button--warning': props.variant == 'warning',
      'idsk-primary-button--medium': props.size == 'medium',
      'idsk-primary-button--large': props.size == 'large',
      'idsk-primary-button--icon-left': props.icon && props.iconPosition == 'left',
      'idsk-primary-button--icon-right': props.icon && props.iconPosition == 'right'
    },
    props.className
  );

  return <BaseButton {...props} className={className} />;
};

export default PrimaryButton;
