import React, { MouseEventHandler, ReactElement, ReactNode, SVGProps } from 'react';
import classNames from 'classnames';

export interface BaseButtonProps {
  id?: string;
  className?: string;
  label?: string;
  type?: 'button' | 'reset' | 'submit' | undefined;
  children?: ReactNode | undefined;
  disabled?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  size?: 'medium' | 'large';
  fullWidth?: boolean;
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
        className: classNames('button__icon', {
          'button__icon--left': props.iconPosition == 'left' || props.iconPosition == undefined,
          'button__icon--right': props.iconPosition == 'right'
        })
      })
    : undefined;

  const buttonClasses: string = classNames(props.className, {
    'button--w-full': props.fullWidth
  });

  return (
    <button
      className={buttonClasses}
      disabled={props.disabled}
      id={props.id}
      type={props.type}
      aria-label={props.ariaLabel}
      aria-labelledby={props.ariaLabelledBy}
      aria-disabled={props.disabled}
      aria-describedby={props.ariaDescribedBy}
      onClick={props.onClick}
      {...props.buttonElementProps}
    >
      {(props.iconPosition == 'left' && icon) || (props.iconPosition == undefined && icon)}
      {props.label && <span className="button__label">{props.label}</span>}
      {props.children && props.children}
      {props.iconPosition == 'right' && icon}
    </button>
  );
};

export default BaseButton;
