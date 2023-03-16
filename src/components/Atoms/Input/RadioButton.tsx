import classNames from 'classnames';
import React, { Children, ReactNode } from 'react';
import { RadioButtonCheckedIcon, RadioButtonUncheckedIcon } from '../../../svgIcons/Toggle';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'small';
  disabled?: boolean;
  name?: string;
  label?: ReactNode;
  checked?: boolean;
  onChange?: (event?: React.ChangeEvent) => void;
  error?: boolean;
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      name = 'name',
      inputSize = 'large',
      disabled = false,
      error = false,
      ...props
    }: RadioButtonProps,
    ref
  ) => {
    const textSizeClasses = classNames('idsk-radio-button__text', {
      'idsk-radio-button__text--large': inputSize === 'large',
      'idsk-radio-button__text--small': inputSize === 'small'
    });
    const iconSizeClasses = classNames('idsk-radio-button__icon', {
      'idsk-radio-button__icon--large': inputSize === 'large',
      'idsk-radio-button__icon--small': inputSize === 'small',
      'idsk-radio-button__icon--large-disabled': inputSize === 'large' && disabled,
      'idsk-radio-button__icon--small-disabled': inputSize === 'small' && disabled,
      'idsk-radio-button__icon--error': error
    });
    const uncheckedIconSizeClasses = classNames('idsk-radio-button__unchecked-icon', {
      'idsk-radio-button__icon--large': inputSize === 'large',
      'idsk-radio-button__icon--small': inputSize === 'small',
      'idsk-radio-button__unchecked-icon--large-disabled': inputSize === 'large' && disabled,
      'idsk-radio-button__unchecked-icon--small-disabled': inputSize === 'small' && disabled,
      'idsk-radio-button__icon--error': error
    });
    const inputClasses = classNames('idsk-radio-button__input', {
      'idsk-radio-button__input--large': inputSize === 'large',
      'idsk-radio-button__input--small': inputSize === 'small',
      'idsk-radio-button__input--large hover:bg-transparent': inputSize === 'large' && disabled,
      'idsk-radio-button__input--small hover:bg-transparent': inputSize === 'small' && disabled
    });
    const labelClasses: string = classNames('idsk-radio-button', {
      'idsk-radio-button__label': !disabled,
      'idsk-radio-button__label--disabled': disabled,
      'idsk-radio-button--large': inputSize === 'large',
      'idsk-radio-button--small': inputSize === 'small'
    });
    return (
      <div className="idsk-radio-button-container">
        <label className={labelClasses}>
          <input
            type="radio"
            ref={ref}
            name={name}
            disabled={disabled}
            checked={props.checked}
            className={inputClasses}
            onChange={props.onChange}
            {...props}
          />

          <RadioButtonCheckedIcon className={iconSizeClasses} />
          <RadioButtonUncheckedIcon className={uncheckedIconSizeClasses} />
          <div className={textSizeClasses}>{props.label}</div>
        </label>
      </div>
    );
  }
);

export interface RadioButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  onChangeAll?: (event?: React.ChangeEvent) => void;
  label?: ReactNode;
  mandatory?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorMsg?: string;
}

export function RadioButtonGroup({
  children,
  label,
  mandatory,
  disabled,
  onChangeAll,
  error,
  errorMsg,
  ...props
}: RadioButtonGroupProps) {
  const renderedChildren = Children.map(children, (child) => {
    if (React.isValidElement<RadioButtonProps>(child)) {
      const newProps: RadioButtonProps = { error, disabled };
      if (!!onChangeAll) newProps.onChange = onChangeAll;

      return React.cloneElement(child, newProps);
    }
  });
  return (
    <div {...props}>
      {!!label && (
        <p className="idsk-input__label">
          {label} {mandatory && <span className="idsk-input__label--mandatory"> *</span>}
        </p>
      )}
      <div className={classNames({ 'idsk-radio-button-group-body': !!label })}>
        {renderedChildren}
      </div>
      {error && !!errorMsg && !disabled && (
        <p className="idsk-input__caption input__caption--error">
          <span role="alert">{errorMsg}</span>
        </p>
      )}
    </div>
  );
}

export default RadioButton;
