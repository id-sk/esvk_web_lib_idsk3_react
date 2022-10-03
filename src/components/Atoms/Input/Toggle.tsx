import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';
import { Switch } from '@headlessui/react';

export interface ToggleProps {
  inputSize?: 'large' | 'small';
  disabled?: boolean;
  onChange?(checked: boolean): void;
  checked?: boolean;
  label?: ReactNode;
  className?: string;
  id?: string;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      inputSize = 'large',
      disabled,
      checked,
      className,
      onChange = undefined,
      label,
      id,
      ...props
    }: ToggleProps,
    ref
  ) => {
    const [checkedState, setCheckedState] = useState(checked);
    const switchClasses: string = classNames(
      'toggle',
      {
        'toggle--checked': checkedState === true,
        'toggle--small': inputSize === 'small',
        'toggle--disabled': disabled === true
      },
      className
    );

    const handleOnChange = (isChecked: boolean) => {
      setCheckedState(isChecked);
      if (onChange != undefined) onChange(isChecked);
    };

    return (
      <Switch.Group>
        <div className="toggle__wrapper">
          <Switch
            ref={ref}
            checked={checkedState}
            onChange={handleOnChange}
            className={switchClasses}
            disabled={disabled}
            id={id}
            {...props}
          >
            <span className="toggle__dot" />
          </Switch>
          <Switch.Label
            className={classNames('toggle__label', {
              'toggle__label--large': inputSize == 'large'
            })}
          >
            {label}
          </Switch.Label>
        </div>
      </Switch.Group>
    );
  }
);

export default Toggle;
