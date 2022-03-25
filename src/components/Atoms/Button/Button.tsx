import React, { MouseEventHandler, ReactElement, ReactNode, SVGProps } from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  variant?: 'basic' | 'success' | 'warning';
  label?: string;
  children?: ReactNode | undefined;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  iconPosition?: 'left' | 'right';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  buttonElementProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

const defaultButtonProps: ButtonProps = {
  variant: 'basic',
  size: 'medium',
  iconPosition: 'left'
};

const Button = (props: ButtonProps) => {
  props = { ...defaultButtonProps, ...props };

  const icon = props.icon
    ? React.cloneElement(props.icon, {
        width: '1.5rem',
        height: '1.5rem',
        viewBox: '0 0 23 23',
        className: classNames(
          'shrink-0',
          { 'mr-2.5': props.iconPosition == 'left' },
          { 'ml-2.5': props.iconPosition == 'right' }
        )
      })
    : undefined;

  const cssClasses = classNames(
    'flex justify-center items-center rounded-md',
    { 'flex-col': !icon },
    { 'px-4 py-2': props.size == 'small' },
    { 'px-4 py-2': props.size == 'medium' },
    { 'px-5 py-3': props.size == 'large' },
    {
      'bg-primary hover:ring-primary-dark focus:ring-primary-dark active:bg-primary-dark':
        props.variant == 'basic'
    },
    {
      'bg-alert-positive hover:ring-alert-positive-dark focus:ring-alert-positive-dark active:bg-alert-positive-dark':
        props.variant == 'success'
    },
    {
      'bg-alert-warning hover:ring-alert-warning-dark focus:ring-alert-warning-dark active:bg-alert-warning-dark':
        props.variant == 'warning'
    },
    'text-button text-white',
    'hover:ring hover:ring-offset-0',
    'focus:outline-none focus:ring focus:ring-offset-0',
    'disabled:bg-neutral-500 disabled:ring-0'
  );

  return (
    <button
      className={cssClasses}
      disabled={props.disabled}
      aria-disabled={props.disabled}
      onClick={props.onClick}
      {...props.buttonElementProps}
    >
      {props.iconPosition == 'left' && icon}
      {props.label && <span>{props.label}</span>}
      {props.children && props.children}
      {props.iconPosition == 'right' && icon}
    </button>
  );
};

export default Button;
