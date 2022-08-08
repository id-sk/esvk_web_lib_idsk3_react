import React, {
  MouseEventHandler,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { Input, InputProps } from '../index';

export interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMsg?: string;
  label?: string;
  caption?: string;
  subtitle?: string;
  disabled?: boolean;
  hideDay?: boolean;
  hideMonth?: boolean;
  hideYear?: boolean;
  dayLabel?: string;
  monthLabel?: string;
  yearLabel?: string;
  inputClasses?: string;
}

interface DateInputRef {
  value: {
    day?: string;
    month?: string;
    year?: string;
  };
}

const DateInput = React.forwardRef<DateInputRef, DateInputProps>(
  (
    {
      error,
      errorMsg,
      label,
      subtitle,
      caption,
      disabled,
      placeholder,
      onChange,
      inputClasses,
      hideDay = false,
      hideMonth = false,
      hideYear = false,
      dayLabel,
      monthLabel,
      yearLabel,
      ...props
    }: DateInputProps,
    ref
  ) => {
    const [isError, setError] = useState(error);
    const dayRef = useRef<HTMLInputElement>(null);
    const monthRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      value: {
        day: dayRef?.current?.value,
        month: monthRef?.current?.value,
        year: yearRef?.current?.value
      }
    }));

    const allInputClasses: string = classNames(
      'input',
      {
        'input--error': isError
      },
      inputClasses
    );

    const dateInputWrapperClasses: string = classNames('date-input__wrapper', {
      'input__wrapper--error': isError,
      'input__wrapper--disabled': disabled
    });

    const idForAria: string = uuidv4();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, maxValue: number) => {
      if (event.currentTarget.value == '') {
        return;
      }
      const inputValue = Number(event.currentTarget.value);
      setError(inputValue > maxValue || inputValue <= 0);
    };

    return (
      <div className="date-input">
        <p className="input__label">{label}</p>
        {!!subtitle && <p className="input__subtitle">{subtitle}</p>}
        <div className={dateInputWrapperClasses} {...props}>
          {!hideDay && (
            <Input
              ref={dayRef}
              label={dayLabel}
              type="number"
              className={classNames(allInputClasses, 'date-input__day-n-month')}
              disabled={disabled}
              onChange={(e) => handleInputChange(e, 31)}
            />
          )}
          {!hideMonth && (
            <Input
              ref={monthRef}
              label={monthLabel}
              type="number"
              className={classNames(allInputClasses, 'date-input__day-n-month')}
              disabled={disabled}
              onChange={(e) => handleInputChange(e, 12)}
            />
          )}
          {!hideYear && (
            <Input
              ref={yearRef}
              label={yearLabel}
              type="number"
              className={classNames(allInputClasses, 'date-input__year')}
              disabled={disabled}
              onChange={(e) => handleInputChange(e, 9999)}
            />
          )}
        </div>
        {(!!errorMsg || !!caption) && (
          <p
            className={classNames('input__caption', {
              'input__caption--error': isError && !disabled
            })}
          >
            {isError && !!errorMsg && !disabled ? (
              <span id={idForAria} role="alert">
                {errorMsg}
              </span>
            ) : (
              <span>{caption}</span>
            )}
          </p>
        )}
      </div>
    );
  }
);

export default DateInput;
