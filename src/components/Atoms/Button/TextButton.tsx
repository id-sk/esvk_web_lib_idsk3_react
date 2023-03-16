import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';

export interface TextButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning' | 'contrast';
}

const defaultButtonProps: TextButtonProps = {
  variant: 'basic',
  size: 'medium',
  iconPosition: 'left'
};

const TextButton = (props: TextButtonProps) => {
  props = { ...defaultButtonProps, ...props };
  const className = classNames(
    'idsk-link-button',
    {
      'idsk-link-button--basic': props.variant == 'basic',
      'idsk-link-button--success': props.variant == 'success',
      'idsk-link-button--warning': props.variant == 'warning',
      'idsk-link-button--contrast': props.variant == 'contrast',
      'idsk-link-button--medium': props.size == 'medium',
      'idsk-link-button--large': props.size == 'large',
      'idsk-link-button--icon-left': props.icon && props.iconPosition == 'left',
      'idsk-link-button--icon-right': props.icon && props.iconPosition == 'right'
    },
    props.className
  );

  return <BaseButton {...props} className={className} />;
};

export default TextButton;
