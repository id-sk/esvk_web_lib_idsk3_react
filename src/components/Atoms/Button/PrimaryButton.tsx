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

  return (
    <BaseButton
      className={classNames(
        'flex justify-center items-center rounded-md',
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
          'bg-primary hover:ring-primary-dark focus:ring-primary-dark active:bg-primary-dark':
            props.variant == 'basic',
          'bg-alert-positive hover:ring-alert-positive-dark focus:ring-alert-positive-dark active:bg-alert-positive-dark':
            props.variant == 'success',
          'bg-alert-warning hover:ring-alert-warning-dark focus:ring-alert-warning-dark active:bg-alert-warning-dark':
            props.variant == 'warning'
        },
        'text-button text-white',
        'hover:ring hover:ring-offset-0',
        'focus:outline-none focus:ring focus:ring-offset-0',
        'disabled:bg-neutral-500 disabled:ring-0'
      )}
      {...props}
    />
  );
};

export default PrimaryButton;
