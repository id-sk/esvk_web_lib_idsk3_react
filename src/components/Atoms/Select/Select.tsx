import React, { ChangeEvent, ReactElement, SVGProps, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { ExpandMoreIcon } from '../../../svgIcons/Navigation';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  inputSize?: 'large' | 'medium' | 'small';
  error?: boolean;
  errorMsg?: string;
  label?: string;
  caption?: string;
  subtitle?: string;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  arrowIcon?: ReactElement;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  errorMessageId?: string;
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
      ...props
    }: SelectProps,
    ref
  ) => {
    const defaultSelectValue = 'default'; // to have selected item on default
    const [activePlaceholder, setActivePlaceholder] = useState(placeholder != null);

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setActivePlaceholder(e.target.value == defaultSelectValue);
      if (onChange != undefined) onChange(e);
    };

    const selectClasses: string = classNames(
      'select',
      {
        'input--large': inputSize === 'large',
        'input--medium': inputSize === 'medium',
        'input--small': inputSize === 'small',
        'input--icon-left': !!icon,
        'input--error': error,
        'input--w-full': fullWidth,
        'select--not-selected': activePlaceholder
      },
      className
    );

    const selectWrapperClasses: string = classNames('input__wrapper', {
      'input__wrapper--error': error,
      'input__wrapper--disabled': disabled,
      'w-full': fullWidth
    });

    const idForAria: string = errorMessageId || uuidv4();

    const iconElement = !!icon
      ? React.cloneElement(icon, {
          className: classNames('input__icon input__icon--left', {
            'input__icon--large': inputSize === 'large',
            'input__icon--medium': inputSize === 'medium',
            'input__icon--small': inputSize === 'small'
          })
        })
      : undefined;
    return (
      <>
        <label className={classNames({ 'w-full': fullWidth })}>
          {!!label && <p className="input__label">{label}</p>}
          {!!subtitle && <p className="input__subtitle">{subtitle}</p>}
          <div className={selectWrapperClasses}>
            <select
              ref={ref}
              className={selectClasses}
              disabled={disabled}
              aria-disabled={disabled}
              onChange={handleOnChange}
              aria-invalid={error}
              aria-errormessage={idForAria}
              defaultValue={defaultSelectValue}
              {...props}
            >
              {placeholder && (
                <option value={defaultSelectValue} disabled hidden>
                  {placeholder}
                </option>
              )}
              {children}
            </select>
            {!!arrowIcon && <div className="select__arrow">{arrowIcon}</div>}
            {!!icon && iconElement}
          </div>
        </label>
        {(!!errorMsg || !!caption) && (
          <p
            className={classNames('input__caption', {
              'input__caption--error': error && !disabled
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
