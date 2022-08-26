import classNames from 'classnames';
import React, { Children, ReactNode } from 'react';
import { RadioButtonCheckedIcon, RadioButtonUncheckedIcon } from '../../../svgIcons/Toggle';

export interface RadioButtonProps {
  checkboxSize?: 'large' | 'small';
  disabled?: boolean;
  name?: string;
  children?: ReactNode;
  checked?: boolean;
  onChange?: () => void;
  onChangeAll?: () => void;
  id?: string;
}

const defaultRadioProps: RadioButtonProps = {
  name: 'name',
  checkboxSize: 'large',
  disabled: false
};

const RadioButton = (props: RadioButtonProps) => {
  props = { ...defaultRadioProps, ...props };
  const textSizeClasses: string = classNames('radio-button', {
    'radio-button--large': props.checkboxSize === 'large',
    'radio-button--small': props.checkboxSize === 'small'
  });
  const iconSizeClasses: string = classNames('radio-button__icon', {
    'radio-button__icon--large': props.checkboxSize === 'large',
    'radio-button__icon--small': props.checkboxSize === 'small',
    'radio-button__icon--large-disabled': props.checkboxSize === 'large' && props.disabled === true,
    'radio-button__icon--small-disabled': props.checkboxSize === 'small' && props.disabled === true
  });
  const uncheckedIconSizeClasses: string = classNames('radio-button__unchecked-icon', {
    'radio-button__icon--large': props.checkboxSize === 'large',
    'radio-button__icon--small': props.checkboxSize === 'small',
    'radio-button__unchecked-icon--large-disabled':
      props.checkboxSize === 'large' && props.disabled === true,
    'radio-button__unchecked-icon--small-disabled':
      props.checkboxSize === 'small' && props.disabled === true
  });
  const inputClasses: string = classNames('radio-button__input', {
    'radio-button__input--large': props.checkboxSize === 'large',
    'radio-button__input--small': props.checkboxSize === 'small',
    'radio-button__input--large hover:bg-transparent':
      props.checkboxSize === 'large' && props.disabled === true,
    'radio-button__input--small hover:bg-transparent':
      props.checkboxSize === 'small' && props.disabled === true
  });
  return (
    <label className={textSizeClasses}>
      <input
        type="radio"
        name={props.name}
        checked={props.checked}
        className={inputClasses}
        id={props.id}
        onChange={props.onChange}
      />
      <RadioButtonCheckedIcon className={iconSizeClasses} />
      <RadioButtonUncheckedIcon className={uncheckedIconSizeClasses} />
      {props.children}
    </label>
  );
};

export function RadioButtonGroup({ children, ...props }: RadioButtonProps) {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
  });
  return (
    <div {...props} onChange={props.onChangeAll}>
      {renderedChildren}
    </div>
  );
}

export default RadioButton;
