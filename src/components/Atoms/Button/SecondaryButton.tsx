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
      className={classNames(
        'flex justify-center items-center rounded-md border-2',
        { 'flex-col': !props.icon },
        {
          'py-2': props.size == 'medium',
          'py-3': props.size == 'large',
          'px-4': props.size == 'medium' && !props.icon,
          'pl-3.5 pr-4': props.size == 'medium' && props.icon && props.iconPosition == 'left',
          'pl-4 pr-3.5': props.size == 'medium' && props.icon && props.iconPosition == 'right',
          'px-5': props.size == 'large' && !props.icon,
          'pl-4 pr-5': props.size == 'large' && props.icon && props.iconPosition == 'left',
          'pl-5 pr-4': props.size == 'large' && props.icon && props.iconPosition == 'right'
        },
        {
          'text-primary-dark bg-blue-100 border-blue-400 hover:ring-blue-400 focus:ring-blue-400 active:border-primary-dark active:ring-primary-dark':
            props.variant == 'basic',
          'text-alert-positive-dark bg-alert-positive-light border-alert-positive hover:ring-alert-positive focus:ring-alert-positive active:border-alert-positive-dark active:ring-alert-positive-dark':
            props.variant == 'success',
          'text-alert-warning-dark bg-alert-warning-light border-alert-warning hover:ring-alert-warning focus:ring-alert-warning active:border-alert-warning-dark active:ring-alert-warning-dark':
            props.variant == 'warning',
          'text-primary bg-black/10 border-blue-400 hover:ring-blue-400 focus:ring-blue-400 active:text-blue-300 active:border-blue-300 active:ring-blue-300':
            props.variant == 'contrast'
        },
        'text-button',
        'active:ring-1 active:ring-offset-0',
        'hover:ring-1 hover:ring-offset-0',
        'focus:outline-none focus:ring-1 focus:ring-offset-0',
        {
          'disabled:bg-neutral-100 disabled:text-neutral-600 disabled:border-neutral-500 disabled:ring-0':
            props.variant != 'contrast',
          'disabled:bg-transparent disabled:text-neutral-600 disabled:border-white/10 disabled:ring-0':
            props.variant == 'contrast'
        }
      )}
      {...props}
    />
  );
};

export default SecondaryButton;
