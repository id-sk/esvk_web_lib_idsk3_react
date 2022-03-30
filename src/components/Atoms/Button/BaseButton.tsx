import React, { MouseEventHandler, ReactElement, ReactNode, SVGProps } from 'react';
import classNames from 'classnames';

export interface BaseButtonProps {
  className?: string;
  label?: string;
  children?: ReactNode | undefined;
  disabled?: boolean;
  size?: 'medium' | 'large';
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  iconPosition?: 'left' | 'right';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  buttonElementProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

const BaseButton = (props: BaseButtonProps) => {
  const icon = props.icon
    ? React.cloneElement(props.icon, {
        width: '1.5rem',
        height: '1.5rem',
        className: classNames(
          'shrink-0',
          { 'mr-2.5': props.iconPosition == 'left' },
          { 'ml-2.5': props.iconPosition == 'right' }
        )
      })
    : undefined;

  return (
    <button
      className={props.className}
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

export default BaseButton;
