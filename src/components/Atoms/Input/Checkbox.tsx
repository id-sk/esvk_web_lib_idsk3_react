import classNames from 'classnames';
import React, { ReactNode } from 'react';
import {
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
  IndeterminateCheckBoxIcon
} from '../../../svgIcons/Toggle';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'small';
  disabled?: boolean;
  name?: string;
  label?: ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasUncheckIcon?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name = 'name',
      inputSize = 'large',
      disabled = false,
      label,
      checked,
      onChange,
      hasUncheckIcon,
      ...props
    }: CheckboxProps,
    ref
  ) => {
    const textSizeClasses: string = classNames('checkbox', {
      'checkbox--large': inputSize === 'large',
      'checkbox--small': inputSize === 'small'
    });
    const iconSizeClasses: string = classNames('checkbox__icon', {
      'checkbox__icon--large': inputSize === 'large',
      'checkbox__icon--small': inputSize === 'small',
      'checkbox__icon--small-disabled': inputSize === 'small' && disabled === true,
      'checkbox__icon--large-disabled': inputSize === 'large' && disabled === true
    });
    const uncheckedIconSizeClasses: string = classNames('checkbox__unchecked-icon', {
      'checkbox__icon--large': inputSize === 'large',
      'checkbox__icon--small': inputSize === 'small',
      'checkbox__icon--small-disabled': inputSize === 'small' && disabled === true,
      'checkbox__icon--large-disabled': inputSize === 'large' && disabled === true
    });
    const inputClasses: string = classNames('checkbox__input', {
      'checkbox__input--large': inputSize === 'large',
      'checkbox__input--small': inputSize === 'small',
      'checkbox__input--large-disabled': inputSize === 'large' && disabled === true,
      'checkbox__input--small-disabled': inputSize === 'small' && disabled === true
    });
    const labelClasses: string = classNames('checkbox', {
      checkbox__label: !disabled,
      'checkbox__label--disabled': disabled === true
    });
    return (
      <div className="checkbox-container">
        <label className={labelClasses}>
          <input
            ref={ref}
            type="checkbox"
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            className={inputClasses}
            {...props}
          />
          {!!hasUncheckIcon ? (
            <IndeterminateCheckBoxIcon className={iconSizeClasses} />
          ) : (
            <CheckBoxIcon className={iconSizeClasses} />
          )}
          <CheckBoxOutlineBlankIcon className={uncheckedIconSizeClasses} />
        </label>
        <div className={textSizeClasses}>{label}</div>
      </div>
    );
  }
);

export default Checkbox;
