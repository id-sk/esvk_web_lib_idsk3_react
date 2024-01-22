import React, { ChangeEvent, ReactElement, SVGProps, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { ExpandMoreIcon } from '../../../svgIcons/Navigation';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  inputSize?: 'large' | 'medium' | 'small';
  error?: boolean;
  errorMsg?: string;
  label?: string;
  subtitle?: string;
  caption?: string;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  arrowIcon?: ReactElement;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  errorMessageId?: string;
  mandatory?: boolean;
  defaultSelectValue?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      inputSize = 'large',
      error,
      errorMsg,
      label,
      subtitle,
      caption,
      disabled,
      fullWidth,
      placeholder,
      onChange,
      className,
      children,
      arrowIcon = <ExpandMoreIcon width="1.5rem" height="1.5rem" />,
      icon,
      errorMessageId,
      mandatory = false,
      defaultSelectValue = 'default',
      value,
      ...props
    }: SelectProps,
    ref
  ) => {
    const [placeholderIsActive, setPlaceholderIsActive] = useState(!value && !!placeholder);

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
      if (!!placeholder) {
        setPlaceholderIsActive(e.target.value === defaultSelectValue);
      }
      if (!!onChange) onChange(e);
    };

    const selectClasses: string = classNames(
      'idsk-select',
      {
        'idsk-input--large': inputSize === 'large',
        'idsk-input--medium': inputSize === 'medium',
        'idsk-input--small': inputSize === 'small',
        'idsk-input--icon-left': !!icon,
        'idsk-input--error': error,
        'idsk-input--w-full': fullWidth,
        'idsk-select--not-selected': placeholderIsActive
      },
      className
    );

    const selectWrapperClasses: string = classNames('idsk-input__wrapper', {
      'idsk-input__wrapper--error': error,
      'idsk-input__wrapper--disabled': disabled,
      'w-full': fullWidth
    });

    const idForAria: string = errorMessageId || uuidv4();

    const iconElement = !!icon
      ? React.cloneElement(icon, {
          className: classNames('idsk-input__icon idsk-input__icon--left', {
            'idsk-input__icon--large': inputSize === 'large',
            'idsk-input__icon--medium': inputSize === 'medium',
            'idsk-input__icon--small': inputSize === 'small'
          })
        })
      : undefined;
    return (
      <>
        <label className={classNames({ 'w-full': fullWidth })}>
          {!!label && (
            <p className="idsk-input__label">
              {label} {mandatory && <span className="idsk-input__label--mandatory"> *</span>}
            </p>
          )}
          {!!subtitle && <p className="idsk-input__subtitle">{subtitle}</p>}
          <div className={selectWrapperClasses}>
            <select
              ref={ref}
              className={selectClasses}
              disabled={disabled}
              aria-disabled={disabled}
              onChange={handleOnChange}
              aria-invalid={error}
              aria-errormessage={idForAria}
              value={value}
              {...props}
            >
              {!!placeholder && (
                <option value={defaultSelectValue} disabled hidden>
                  {placeholder}
                </option>
              )}
              {children}
            </select>
            {!!arrowIcon && <div className="idsk-select__arrow">{arrowIcon}</div>}
            {!!icon && iconElement}
          </div>
        </label>
        {(!!errorMsg || !!caption) && (
          <p
            className={classNames('idsk-input__caption', {
              'idsk-input__caption--error': error && !disabled
            })}
          >
            {error && !!errorMsg && !disabled ? (
              <span id={idForAria} role="alert">
                {errorMsg}
              </span>
            ) : (
              <span>{caption}</span>
            )}
          </p>
        )}
      </>
    );
  }
);

export default Select;
