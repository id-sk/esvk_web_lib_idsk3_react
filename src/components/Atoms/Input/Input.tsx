import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export interface InputProps {
  error?: boolean;
  errorMsg?: string;
  label?: string;
  caption?: string;
  subtitle?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputElementProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input = ({
  error,
  errorMsg,
  label,
  subtitle,
  caption,
  disabled,
  placeholder,
  onChange,
  inputElementProps
}: InputProps) => {
  const inputClasses: string = classNames(
    'my-2 bg-white h-12 px-4',
    'text-body text-black placeholder:text-neutral-600',
    'border outline-1 outline-none outline-offset-0 rounded-lg',
    'hover:shadow-border hover:shadow-neutral-600',
    'focus:shadow-border focus:shadow-neutral-600',
    'disabled:border-neutral-400 disabled:shadow-none disabled:outline-transparent',
    {
      'outline-black border-black focus:outline-black focus:border-black': !error,
      'placeholder-shown:border-neutral-800 placeholder-shown:outline-transparent': !error,
      'border-alert-warning outline-alert-warning': error
    }
  );

  const errorMsgClasses: string = classNames('text-alert-warning', { hidden: !error });
  const captionClasses: string = classNames({
    hidden: error
  });

  const idForAria: string = uuidv4();

  return (
    <>
      <label>
        <p className="text-body">{label}</p>
        {!!subtitle && <p className="text-body-1 text-neutral-600">{subtitle}</p>}
        <input
          className={inputClasses}
          disabled={disabled}
          aria-disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          aria-invalid={error}
          aria-errormessage={idForAria}
          {...inputElementProps}
        />
      </label>
      <p className="text-body-1 text-neutral-600  border-l border-transparent px-4">
        <span className={errorMsgClasses} id={idForAria} role="alert">
          {errorMsg}
        </span>
        <span className={captionClasses}>{caption}</span>
      </p>
    </>
  );
};

export default Input;
