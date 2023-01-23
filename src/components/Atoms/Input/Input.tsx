import React, {
  MouseEventHandler,
  ReactElement,
  ReactNode,
  SVGProps,
  useEffect,
  useRef,
  useState
} from 'react';
import { WarningIcon } from '../../../svgIcons/Alert';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'medium' | 'small';
  error?: boolean;
  errorMsg?: string;
  label?: ReactNode;
  labelSrOnly?: boolean;
  caption?: string;
  subtitle?: string;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  iconPosition?: 'left' | 'right';
  actionButton?: { label: ReactNode; onClick: MouseEventHandler<HTMLButtonElement> | undefined };
  errorMessageId?: string;
  optionalText?: string;
  mandatory?: boolean;
  disabledErrorIcon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize = 'large',
      error,
      errorMsg,
      label,
      labelSrOnly = false,
      subtitle,
      caption,
      disabled,
      fullWidth,
      placeholder,
      onChange,
      className,
      icon,
      iconPosition = 'left',
      actionButton,
      errorMessageId,
      optionalText,
      mandatory = false,
      disabledErrorIcon = false,
      ...props
    }: InputProps,
    ref
  ) => {
    if (!!actionButton && iconPosition === 'right') iconPosition = 'left';

    const inputClasses: string = classNames(
      'input',
      {
        'input--large': inputSize === 'large',
        'input--medium': inputSize === 'medium',
        'input--small': inputSize === 'small',
        'input--icon-left': !!icon && iconPosition === 'left',
        'input--icon-right': !!icon && iconPosition === 'right',
        'input--error': error,
        'input--w-full': fullWidth
      },
      className
    );

    const inputWrapperClasses: string = classNames('input__wrapper', {
      'input__wrapper--error': error,
      'input__wrapper--disabled': disabled,
      'w-full': fullWidth
    });

    const actionButtonClasses: string = classNames('input__action', {
      'input__action--large': inputSize === 'large',
      'input__action--medium': inputSize === 'medium',
      'input__action--small': inputSize === 'small',
      'input__action--error': error
    });

    const idForAria: string = errorMessageId || uuidv4();

    const iconElement = !!icon
      ? React.cloneElement(icon, {
          className: classNames('input__icon', {
            'input__icon--large': inputSize === 'large',
            'input__icon--medium': inputSize === 'medium',
            'input__icon--small': inputSize === 'small',
            'input__icon--left': iconPosition === 'left',
            'input__icon--right': iconPosition === 'right'
          })
        })
      : undefined;

    const actionButtonRef = useRef<HTMLButtonElement>(null);
    const [rightPadding, setRightPadding] = useState<number | undefined>();
    useEffect(() => {
      if (!!actionButton?.label && actionButtonRef.current) {
        setRightPadding(actionButtonRef.current.offsetWidth);
      }
    }, [actionButton?.label, inputSize]);

    return (
      <>
        <div className={classNames({ 'w-full': fullWidth })}>
          {!!label && (
            <label
              className={classNames('input__label', { 'sr-only': labelSrOnly })}
              htmlFor={props.id}
            >
              {label}
              {optionalText && <span className="input__label--optional"> {optionalText}</span>}
              {mandatory && <span className="input__label--mandatory"> *</span>}
            </label>
          )}
          {!!subtitle && <p className="input__subtitle">{subtitle}</p>}
          <div className={inputWrapperClasses}>
            <input
              ref={ref}
              className={inputClasses}
              disabled={disabled}
              aria-disabled={disabled}
              placeholder={placeholder}
              onChange={onChange}
              aria-invalid={error}
              aria-errormessage={props.id ?? idForAria}
              style={{
                paddingRight: !!rightPadding ? rightPadding + 'px' : undefined
              }}
              {...props}
            />
            {!!icon && iconElement}
            {!!error && !disabledErrorIcon && (
              <WarningIcon
                className={classNames(
                  'input__icon',
                  {
                    'input__icon--large': inputSize === 'large',
                    'input__icon--medium': inputSize === 'medium',
                    'input__icon--small': inputSize === 'small'
                  },
                  'input__icon--right'
                )}
              />
            )}
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
        </div>
        {(!!errorMsg || !!caption) && (
          <p
            className={classNames('input__caption', {
              'input__caption--error': error && !disabled
            })}
          >
            {error && !!errorMsg && !disabled ? (
              <span id={props.id ?? idForAria} role="alert">
                {errorMsg}
              </span>
            ) : (
              <span>{caption}</span>
            )}
          </p>
        )}
      </>
    );
  }
);

export default Input;
