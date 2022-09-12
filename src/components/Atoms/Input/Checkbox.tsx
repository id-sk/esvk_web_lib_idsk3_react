import classNames from 'classnames';
import React, { ReactNode } from 'react';
import {
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
  IndeterminateCheckBoxIcon
} from '../../../svgIcons/Toggle';

export interface CheckboxProps {
  size?: 'large' | 'small';
  disabled?: boolean;
  name?: string;
  children?: ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasUncheckIcon?: boolean;
  id?: string;
}
const defaultCheckboxProps: CheckboxProps = {
  name: 'name',
  size: 'large',
  disabled: false
};

const Checkbox = (props: CheckboxProps) => {
  props = { ...defaultCheckboxProps, ...props };
  const textSizeClasses: string = classNames('checkbox', {
    'checkbox--large': props.size === 'large',
    'checkbox--small': props.size === 'small'
  });
  const iconSizeClasses: string = classNames('checkbox__icon', {
    'checkbox__icon--large': props.size === 'large',
    'checkbox__icon--small': props.size === 'small',
    'checkbox__icon--small-disabled': props.size === 'small' && props.disabled === true,
    'checkbox__icon--large-disabled': props.size === 'large' && props.disabled === true
  });
  const uncheckedIconSizeClasses: string = classNames('checkbox__unchecked-icon', {
    'checkbox__icon--large': props.size === 'large',
    'checkbox__icon--small': props.size === 'small',
    'checkbox__icon--small-disabled': props.size === 'small' && props.disabled === true,
    'checkbox__icon--large-disabled': props.size === 'large' && props.disabled === true
  });
  const inputClasses: string = classNames('checkbox__input', {
    'checkbox__input--large': props.size === 'large',
    'checkbox__input--small': props.size === 'small',
    'checkbox__input--large-disabled': props.size === 'large' && props.disabled === true,
    'checkbox__input--small-disabled': props.size === 'small' && props.disabled === true
  });
  return (
    <label className={textSizeClasses}>
      <input
        type="checkbox"
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
        className={inputClasses}
        id={props.id}
      />
      {!!props.hasUncheckIcon ? (
        <IndeterminateCheckBoxIcon className={iconSizeClasses} />
      ) : (
        <CheckBoxIcon className={iconSizeClasses} />
      )}
      <CheckBoxOutlineBlankIcon className={uncheckedIconSizeClasses} />
      {props.children}
    </label>
  );
};

export default Checkbox;
