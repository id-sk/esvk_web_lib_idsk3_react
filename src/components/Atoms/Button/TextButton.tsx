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
      className={classNames(
        'flex justify-center items-center bg-none rounded-md',
        { 'flex-col': !props.icon },
        {
          'py-2': props.size == 'medium',
          'py-3': props.size == 'large',
          'px-4': props.size == 'medium' && !props.icon,
          'pl-3 pr-4': props.size == 'medium' && props.icon && props.iconPosition == 'left',
          'pl-4 pr-3': props.size == 'medium' && props.icon && props.iconPosition == 'right',
          'px-5': props.size == 'large' && !props.icon,
          'pl-4 pr-5': props.size == 'large' && props.icon && props.iconPosition == 'left',
          'pl-5 pr-4': props.size == 'large' && props.icon && props.iconPosition == 'right'
        },
        {
          'text-primary hover:ring-primary focus:ring-primary active:text-primary-dark':
            props.variant == 'basic',
          'text-alert-positive hover:ring-alert-positive focus:ring-alert-positive active:text-alert-positive-dark':
            props.variant == 'success',
          'text-alert-warning hover:ring-alert-warning focus:ring-alert-warning active:text-alert-warning-dark':
            props.variant == 'warning',
          'text-primary hover:ring-primary focus:ring-primary active:text-blue-300':
            props.variant == 'contrast'
        },
        'text-button underline',
        'active:ring-0',
        'hover:ring-1 hover:ring-offset-0',
        'focus:outline-none focus:ring-1 focus:ring-offset-0',
        'disabled:text-neutral-600 disabled:ring-0'
      )}
      {...props}
    />
  );
};

export default TextButton;
