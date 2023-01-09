import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import { WarningIcon } from '../../../svgIcons/Alert';
import { v4 as uuidv4 } from 'uuid';

export interface TextFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputSize?: 'large' | 'medium' | 'small';
  error?: boolean;
  errorMsg?: string;
  label?: string;
  labelSrOnly?: boolean;
  caption?: string;
  subtitle?: string;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  rows?: number;
  maxLength?: number;
  onChange?: React.ChangeEventHandler;
  errorMessageId?: string;
  optionalText?: string;
  mandatory?: boolean;
}

const TextField = React.forwardRef<HTMLTextAreaElement, TextFieldProps>(
  (
    {
      inputSize = 'large',
      error,
      errorMsg,
      label,
      labelSrOnly = false,
      subtitle,
      caption,
      disabled,
      fullWidth,
      placeholder,
      rows = 3,
      maxLength = 200,
      onChange = () => {},
      className,
      errorMessageId,
      optionalText,
      mandatory = false,
      ...props
    }: TextFieldProps,
    ref
  ) => {
    const [value, setValue] = useState<string>('');

    const actualLength = useMemo(() => {
      return `${value.length}/${maxLength}`;
    }, [value, maxLength]);

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setValue(event.target.value);
      onChange(event);
    }

    const inputClasses: string = classNames(
      'input',
      {
        'input--large': inputSize === 'large',
        'input--medium': inputSize === 'medium',
        'input--small': inputSize === 'small',
        'input--error': error,
        'input--w-full': fullWidth
      },
      'input-textarea',
      className
    );

    const inputWrapperClasses: string = classNames('input__wrapper', {
      'input__wrapper--error': error,
      'input__wrapper--disabled': disabled,
      'w-full': fullWidth
    });

    const idForAria: string = errorMessageId || uuidv4();

    return (
      <>
        <div className={classNames({ 'w-full': fullWidth })}>
          {!!label && (
            <label
              className={classNames('input__label', { 'sr-only': labelSrOnly })}
              htmlFor={props.id}
            >
              {label}
              {optionalText && <span className="input__label--optional"> {optionalText}</span>}
              {mandatory && <span className="input__label--mandatory"> *</span>}
            </label>
          )}
          {!!subtitle && <p className="input__subtitle">{subtitle}</p>}
          <div className={inputWrapperClasses}>
            <textarea
              ref={ref}
              className={inputClasses}
              disabled={disabled}
              aria-disabled={disabled}
              placeholder={placeholder}
              onChange={(e) => handleChange(e)}
              aria-invalid={error}
              aria-errormessage={idForAria}
              rows={rows}
              maxLength={maxLength}
              {...props}
            />
            {!!error && (
              <WarningIcon
                className={classNames(
                  'input__icon input__icon-textarea',
                  {
                    'input__icon--large': inputSize === 'large',
                    'input__icon--medium': inputSize === 'medium',
                    'input__icon--small': inputSize === 'small'
                  },
                  'input__icon--right'
                )}
              />
            )}
            <span className="input-textarea--counter">{actualLength}</span>
          </div>
        </div>
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

export default TextField;
