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
    'primary-button',
    {
      'primary-button--basic': props.variant == 'basic',
      'primary-button--success': props.variant == 'success',
      'primary-button--warning': props.variant == 'warning',
      'primary-button--medium': props.size == 'medium',
      'primary-button--large': props.size == 'large',
      'primary-button--icon-left': props.icon && props.iconPosition == 'left',
      'primary-button--icon-right': props.icon && props.iconPosition == 'right'
    },
    props.className
  );

  return <BaseButton {...props} className={className} />;
};

export default PrimaryButton;
