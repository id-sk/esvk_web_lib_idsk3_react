import { useState } from 'react';
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
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ name = 'name', inputSize = 'large', disabled = false, ...props }: RadioButtonProps, ref) => {
    const [hover, setHover] = useState(false);
    const hoverClasses = classNames('radio-button__hover', {
      'radio-button__hover--large': inputSize === 'large' && !!hover,
      'radio-button__hover--small': inputSize === 'small' && !!hover
    });
    const backgroundClasses = classNames('radio-button__icon-background', {
      'radio-button__icon-background--large': inputSize === 'large' && !!hover,
      'radio-button__icon-background--small': inputSize === 'small' && !!hover
    });
    const textSizeClasses = classNames('radio-button__text', {
      'radio-button__text--large': inputSize === 'large',
      'radio-button__text--small': inputSize === 'small'
    });
    const iconSizeClasses = classNames('radio-button__icon', {
      'radio-button__icon--large': inputSize === 'large',
      'radio-button__icon--small': inputSize === 'small',
      'radio-button__icon--large-disabled': inputSize === 'large' && disabled === true,
      'radio-button__icon--small-disabled': inputSize === 'small' && disabled === true
    });
    const uncheckedIconSizeClasses = classNames('radio-button__unchecked-icon', {
      'radio-button__icon--large': inputSize === 'large',
      'radio-button__icon--small': inputSize === 'small',
      'radio-button__unchecked-icon--large-disabled': inputSize === 'large' && disabled === true,
      'radio-button__unchecked-icon--small-disabled': inputSize === 'small' && disabled === true
    });
    const inputClasses = classNames('radio-button__input', {
      'radio-button__input--large': inputSize === 'large',
      'radio-button__input--small': inputSize === 'small',
      'radio-button__input--large hover:bg-transparent': inputSize === 'large' && disabled === true,
      'radio-button__input--small hover:bg-transparent': inputSize === 'small' && disabled === true
    });
    const labelClasses: string = classNames('radio-button', {
      'radio-button__label': !disabled,
      'radio-button__label--disabled': disabled === true
    });
    return (
      <div className="radio-button-container">
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
          {!disabled && (
            <>
              <div className={hoverClasses}></div>
              <div className={backgroundClasses}></div>
            </>
          )}

          <RadioButtonCheckedIcon className={iconSizeClasses} />
          <RadioButtonUncheckedIcon
            className={uncheckedIconSizeClasses}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <div className={textSizeClasses}>{props.label}</div>
        </label>
      </div>
    );
  }
);

export interface RadioButtonGroupProps extends React.AllHTMLAttributes<HTMLDivElement> {
  onChangeAll?: (event?: React.ChangeEvent) => void;
}

export function RadioButtonGroup({ children, onChangeAll, ...props }: RadioButtonGroupProps) {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return !!onChangeAll
        ? React.cloneElement(child, { onChange: onChangeAll })
        : React.cloneElement(child);
    }
  });
  return <div {...props}>{renderedChildren}</div>;
}

export default RadioButton;
