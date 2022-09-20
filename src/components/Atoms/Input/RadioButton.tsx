import classNames from 'classnames';
import React, { Children, ReactNode } from 'react';
import { RadioButtonCheckedIcon, RadioButtonUncheckedIcon } from '../../../svgIcons/Toggle';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'small';
  disabled?: boolean;
  name?: string;
  label?: ReactNode;
  checked?: boolean;
  onChange?: () => void;
  onChangeAll?: () => void;
}

const defaultRadioProps: RadioButtonProps = {
  name: 'name',
  inputSize: 'large',
  disabled: false
};

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (props: RadioButtonProps, ref) => {
    props = { ...defaultRadioProps, ...props };
    const textSizeClasses = classNames('radio-button', {
      'radio-button--large': props.inputSize === 'large',
      'radio-button--small': props.inputSize === 'small'
    });
    const iconSizeClasses = classNames('radio-button__icon', {
      'radio-button__icon--large': props.inputSize === 'large',
      'radio-button__icon--small': props.inputSize === 'small',
      'radio-button__icon--large-disabled': props.inputSize === 'large' && props.disabled === true,
      'radio-button__icon--small-disabled': props.inputSize === 'small' && props.disabled === true
    });
    const uncheckedIconSizeClasses = classNames('radio-button__unchecked-icon', {
      'radio-button__icon--large': props.inputSize === 'large',
      'radio-button__icon--small': props.inputSize === 'small',
      'radio-button__unchecked-icon--large-disabled':
        props.inputSize === 'large' && props.disabled === true,
      'radio-button__unchecked-icon--small-disabled':
        props.inputSize === 'small' && props.disabled === true
    });
    const inputClasses = classNames('radio-button__input', {
      'radio-button__input--large': props.inputSize === 'large',
      'radio-button__input--small': props.inputSize === 'small',
      'radio-button__input--large hover:bg-transparent':
        props.inputSize === 'large' && props.disabled === true,
      'radio-button__input--small hover:bg-transparent':
        props.inputSize === 'small' && props.disabled === true
    });
    const labelClasses: string = classNames('radio-button', {
      'radio-button__label': !props.disabled,
      'radio-button__label--disabled': props.disabled === true
    });
    return (
      <div className="radio-button-container">
        <label className={labelClasses}>
          <input
            type="radio"
            ref={ref}
            name={props.name}
            disabled={props.disabled}
            checked={props.checked}
            className={inputClasses}
            onChange={props.onChange}
            {...props}
          />
          <RadioButtonCheckedIcon className={iconSizeClasses} />
          <RadioButtonUncheckedIcon className={uncheckedIconSizeClasses} />
        </label>
        <div className={textSizeClasses}>{props.label}</div>
      </div>
    );
  }
);

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
