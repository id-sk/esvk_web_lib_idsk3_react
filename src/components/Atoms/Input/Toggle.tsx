import classNames from 'classnames';
import React, { ElementType, ReactNode } from 'react';
import { Switch } from '@headlessui/react';

export interface ToggleProps {
  as?: ElementType;
  checked?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  onChange?: ((value: boolean) => void) | undefined;
  name?: string | undefined;
  value?: string | undefined;
  children?: React.ReactNode;
  inputSize?: 'large' | 'small';
  label?: ReactNode;
  className?: string;
  passive?: boolean;
  disabled?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
  inputSize = 'large',
  className,
  label,
  passive,
  disabled,
  checked,
  ...props
}) => {
  const switchClasses: string = classNames(
    'idsk-toggle',
    {
      'idsk-toggle--checked': checked,
      'idsk-toggle--disabled': disabled,
      'idsk-toggle--small': inputSize === 'small'
    },
    className
  );

  const lableClasses: string = classNames('idsk-toggle__label', {
    'idsk-toggle__label--large': inputSize === 'large'
  });

  return (
    <Switch.Group>
      <div className="idsk-toggle__wrapper">
        <Switch checked={checked} className={switchClasses} disabled={disabled} {...props}>
          <span className="idsk-toggle__dot" />
        </Switch>
        {!!label && (
          <Switch.Label passive={passive} className={lableClasses}>
            {label}
          </Switch.Label>
        )}
      </div>
    </Switch.Group>
  );
};

export default Toggle;
