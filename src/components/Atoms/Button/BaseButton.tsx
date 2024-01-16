import React, { MouseEventHandler, ReactElement, ReactNode, SVGProps, forwardRef } from 'react';
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
  withBoldPseudoElement?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  buttonElementProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

const BaseButton = forwardRef(
  (props: BaseButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const icon = props.icon
      ? React.cloneElement(props.icon, {
          className: classNames('idsk-button__icon', {
            'idsk-button__icon--left':
              props.iconPosition == 'left' || props.iconPosition == undefined,
            'idsk-button__icon--right': props.iconPosition == 'right'
          })
        })
      : undefined;

    const buttonClasses: string = classNames('idsk-button', props.className, {
      'idsk-button--w-full': props.fullWidth
    });

    return (
      <button
        ref={ref}
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
        {props.label && (
          <span
            className="idsk-button__label idsk-pseudolabel__wrapper .idsk-pseudolabel__wrapper--center"
            data-pseudolabel={
              props.withBoldPseudoElement && !!props.label ? props.label : undefined
            }
          >
            <span>{props.label}</span>
          </span>
        )}
        {props.children && props.children}
        {props.iconPosition == 'right' && icon}
      </button>
    );
  }
);

export default BaseButton;
