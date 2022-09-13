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
const defaultCheckboxProps: CheckboxProps = {
  name: 'name',
  inputSize: 'large',
  disabled: false
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
  props = { ...defaultCheckboxProps, ...props };
  const textSizeClasses: string = classNames('checkbox', {
    'checkbox--large': props.inputSize === 'large',
    'checkbox--small': props.inputSize === 'small'
  });
  const iconSizeClasses: string = classNames('checkbox__icon', {
    'checkbox__icon--large': props.inputSize === 'large',
    'checkbox__icon--small': props.inputSize === 'small',
    'checkbox__icon--small-disabled': props.inputSize === 'small' && props.disabled === true,
    'checkbox__icon--large-disabled': props.inputSize === 'large' && props.disabled === true
  });
  const uncheckedIconSizeClasses: string = classNames('checkbox__unchecked-icon', {
    'checkbox__icon--large': props.inputSize === 'large',
    'checkbox__icon--small': props.inputSize === 'small',
    'checkbox__icon--small-disabled': props.inputSize === 'small' && props.disabled === true,
    'checkbox__icon--large-disabled': props.inputSize === 'large' && props.disabled === true
  });
  const inputClasses: string = classNames('checkbox__input', {
    'checkbox__input--large': props.inputSize === 'large',
    'checkbox__input--small': props.inputSize === 'small',
    'checkbox__input--large-disabled': props.inputSize === 'large' && props.disabled === true,
    'checkbox__input--small-disabled': props.inputSize === 'small' && props.disabled === true
  });
  return (
    <label className={textSizeClasses}>
      <input
        ref={ref}
        type="checkbox"
        name={props.name}
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
        className={inputClasses}
        {...props}
      />
      {!!props.hasUncheckIcon ? (
        <IndeterminateCheckBoxIcon className={iconSizeClasses} />
      ) : (
        <CheckBoxIcon className={iconSizeClasses} />
      )}
      <CheckBoxOutlineBlankIcon className={uncheckedIconSizeClasses} />
      {props.label}
    </label>
  );
});

export default Checkbox;
