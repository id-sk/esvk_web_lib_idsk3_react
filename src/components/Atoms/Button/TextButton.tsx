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

  return (
    <BaseButton
      className={classNames('link-button', {
        'link-button--basic': props.variant == 'basic',
        'link-button--success': props.variant == 'success',
        'link-button--warning': props.variant == 'warning',
        'link-button--contrast': props.variant == 'contrast',
        'link-button--medium': props.size == 'medium',
        'link-button--large': props.size == 'large',
        'link-button--icon-left': props.icon && props.iconPosition == 'left',
        'link-button--icon-right': props.icon && props.iconPosition == 'right'
      })}
      {...props}
    />
  );
};

export default TextButton;
