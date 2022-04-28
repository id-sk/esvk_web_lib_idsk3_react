import React, {
  MouseEventHandler,
  ReactElement,
  SVGProps,
  useEffect,
  useRef,
  useState
} from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'medium' | 'small';
  error?: boolean;
  errorMsg?: string;
  label?: string;
  caption?: string;
  subtitle?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  iconPosition?: 'left' | 'right';
  actionButton?: { label: string; onClick: MouseEventHandler<HTMLButtonElement> | undefined };
}

const Input = ({
  inputSize = 'large',
  error,
  errorMsg,
  label,
  subtitle,
  caption,
  disabled,
  placeholder,
  onChange,
  icon,
  iconPosition = 'left',
  actionButton,
  ...props
}: InputProps) => {
  if (!!actionButton && iconPosition === 'right') iconPosition = 'left';

  const inputClasses: string = classNames(
    'bg-white px-4',
    'text-black placeholder:text-neutral-600',
    'border outline-1 outline-none outline-offset-0 rounded-lg',
    'hover:shadow-border hover:shadow-neutral-600',
    'focus:shadow-border focus:shadow-neutral-600',
    'disabled:text-neutral-600 disabled:border-neutral-400 disabled:shadow-none disabled:outline-transparent',
    {
      'pl-11': !!icon && iconPosition === 'left' && inputSize === 'large',
      'pl-10': !!icon && iconPosition === 'left' && inputSize === 'medium',
      'pl-9': !!icon && iconPosition === 'left' && inputSize === 'small',
      'pr-11': !!icon && iconPosition === 'right' && inputSize === 'large',
      'pr-10': !!icon && iconPosition === 'right' && inputSize === 'medium',
      'pr-9': !!icon && iconPosition === 'right' && inputSize === 'small',
      'text-body h-12': inputSize === 'large',
      'text-body-1 h-10': inputSize === 'medium',
      'caption h-8': inputSize === 'small',
      'outline-black border-black focus:outline-black focus:border-black': !error,
      'placeholder-shown:border-neutral-800 placeholder-shown:outline-transparent': !error,
      'border-alert-warning outline-alert-warning': error
    }
  );

  const inputWrapperClasses: string = classNames('inline-block relative my-2', {
    'text-neutral-600': disabled,
    'text-alert-warning': error && !disabled,
    'text-black': !error && !disabled
  });
  const actionButtonClasses: string = classNames(
    'absolute right-0 px-4 h-full font-bold disabled:text-neutral-700',
    {
      'text-body': inputSize === 'large',
      'text-body-1': inputSize === 'medium',
      caption: inputSize === 'small',
      'text-alert-warning': error,
      'text-primary': !error
    }
  );

  const idForAria: string = uuidv4();

  const iconSize = classNames({
    '1.25rem': inputSize === 'large',
    '1rem': inputSize === 'medium',
    '0.825rem': inputSize === 'small'
  });

  const iconElement = !!icon
    ? React.cloneElement(icon, {
        width: iconSize,
        height: iconSize,
        className: classNames(
          'absolute inset-y-0 m-auto',
          { 'left-4': iconPosition === 'left' },
          { 'right-4': iconPosition === 'right' }
        )
      })
    : undefined;

  const actionButtonRef = useRef<HTMLButtonElement>(null);
  const [rightPadding, setRightPadding] = useState<number | undefined>();
  useEffect(() => {
    if (!!actionButton?.label && actionButtonRef.current) {
      setRightPadding(actionButtonRef.current.offsetWidth);
    }
  }, [actionButton?.label, inputSize]);

  const [opts, setOpts] = useState({
    mask: '***`-***`-***',
    lazy: false,
    placeholderChar: '*'
  });

  return (
    <>
      <label>
        <p className="text-body">{label}</p>
        {!!subtitle && <p className="text-body-1 text-neutral-600">{subtitle}</p>}
        <div className={inputWrapperClasses}>
          <input
            className={inputClasses}
            disabled={disabled}
            aria-disabled={disabled}
            placeholder={placeholder}
            onChange={onChange}
            aria-invalid={error}
            aria-errormessage={idForAria}
            style={{
              paddingRight: !!rightPadding ? rightPadding + 'px' : undefined
            }}
            {...props}
          />
          {!!icon && iconElement}
          {!!actionButton && (
            <button
              disabled={disabled}
              className={actionButtonClasses}
              onClick={actionButton.onClick}
              ref={actionButtonRef}
            >
              {actionButton.label}
            </button>
          )}
        </div>
      </label>
      {(!!errorMsg || !!caption) && (
        <p className="text-body-1 text-neutral-600  border-l border-transparent px-4">
          {error && !!errorMsg && !disabled ? (
            <span className="text-alert-warning" id={idForAria} role="alert">
              {errorMsg}
            </span>
          ) : (
            <span>{caption}</span>
          )}
        </p>
      )}
    </>
  );
};

export default Input;
