import React, { useState, useImperativeHandle, useRef } from 'react';
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

export interface TextFieldRef extends HTMLTextAreaElement {
  reset: () => void;
}

const TextField = React.forwardRef<TextFieldRef, TextFieldProps>(
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
    const [currentLength, setCurrentLength] = useState(String(props.defaultValue).length);

    const innerRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
      ...(innerRef.current as HTMLTextAreaElement),
      reset: () => {
        setCurrentLength(0);
        if (!!innerRef.current?.value) innerRef.current.value = '';
      }
    }));

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setCurrentLength(event.target?.value?.length);
      onChange(event);
    }

    const inputClasses: string = classNames(
      'idsk-input',
      {
        'idsk-input--large': inputSize === 'large',
        'idsk-input--medium': inputSize === 'medium',
        'idsk-input--small': inputSize === 'small',
        'idsk-input--error': error,
        'idsk-input--w-full': fullWidth
      },
      'idsk-input-textarea',
      className
    );

    const inputWrapperClasses: string = classNames('idsk-input__wrapper', {
      'idsk-input__wrapper--error': error,
      'idsk-input__wrapper--disabled': disabled,
      'w-full': fullWidth
    });

    const idForAria: string = errorMessageId || uuidv4();

    return (
      <>
        <div className={classNames('mb-3', { 'w-full': fullWidth })}>
          {!!label && (
            <label
              className={classNames('idsk-input__label', { 'sr-only': labelSrOnly })}
              htmlFor={props.id}
            >
              {label}
              {optionalText && <span className="idsk-input__label--optional"> {optionalText}</span>}
              {mandatory && <span className="idsk-input__label--mandatory"> *</span>}
            </label>
          )}
          {!!subtitle && <p className="idsk-input__subtitle">{subtitle}</p>}
          <div className={inputWrapperClasses}>
            <textarea
              ref={innerRef}
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
                  'idsk-input__icon idsk-input__icon-textarea',
                  {
                    'idsk-input__icon--large': inputSize === 'large',
                    'idsk-input__icon--medium': inputSize === 'medium',
                    'idsk-input__icon--small': inputSize === 'small'
                  },
                  'idsk-input__icon--right'
                )}
              />
            )}
            {!!maxLength && (
              <span className="idsk-input-textarea--counter" aria-live="polite">
                {currentLength} / {maxLength}
              </span>
            )}
          </div>
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
        </div>
      </>
    );
  }
);

export default TextField;
