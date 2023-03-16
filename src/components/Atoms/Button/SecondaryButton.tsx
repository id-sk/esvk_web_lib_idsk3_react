import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from './BaseButton';

export interface SecondaryButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning' | 'contrast' | 'transparent';
}

const defaultButtonProps: SecondaryButtonProps = {
  variant: 'basic',
  size: 'medium',
  iconPosition: 'left'
};

const SecondaryButton = (props: SecondaryButtonProps) => {
  props = { ...defaultButtonProps, ...props };
  const className = classNames(
    'idsk-secondary-button',
    {
      'idsk-secondary-button--basic': props.variant == 'basic',
      'idsk-secondary-button--success': props.variant == 'success',
      'idsk-secondary-button--warning': props.variant == 'warning',
      'idsk-secondary-button--contrast': props.variant == 'contrast',
      'idsk-secondary-button--transparent': props.variant == 'transparent',
      'idsk-secondary-button--medium': props.size == 'medium',
      'idsk-secondary-button--large': props.size == 'large',
      'idsk-secondary-button--icon-left': props.icon && props.iconPosition == 'left',
      'idsk-secondary-button--icon-right': props.icon && props.iconPosition == 'right'
    },
    props.className
  );

  return <BaseButton {...props} className={className} />;
};

export default SecondaryButton;
