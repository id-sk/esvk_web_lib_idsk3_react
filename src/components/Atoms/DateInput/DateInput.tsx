import React, { useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../index';
import DateRange from '../../../svgIcons/Actions/DateRange';
import DatePicker from 'react-datepicker';
import { setDate, setMonth, setYear } from 'date-fns';

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
  id?: string;
  errorMessageId?: string;
}

export interface DateInputRef {
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
      id,
      errorMessageId,
      ...props
    }: DateInputProps,
    ref
  ) => {
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

    const [startDate, setStartDate] = useState(new Date());
    const [day, setInputDay] = useState('');

    const [month, setInputMonth] = useState('');
    const [year, setInputYear] = useState('');
    const [open, setOpen] = useState(false);
    const dateString = `${year}-${month}-${day}`;

    const addDay = () => {
      if (isNaN(Number(day))) return;
      const newDate = setDate(startDate, Number(day));
      setStartDate(newDate);
    };
    const handleDayInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputDay('');
      if (event.currentTarget.value == '') {
        return;
      }
      const inputValue = Number(event.currentTarget.value);
      setInputDay(inputValue.toString());
    };
    const idForAria: string = errorMessageId || uuidv4();

    const addMonth = () => {
      if (isNaN(Number(month))) return;
      const newDate = setMonth(startDate, Number(month) - 1);
      setStartDate(newDate);
    };
    const handleMonthInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputMonth('');
      if (event.currentTarget.value == '') {
        return;
      }
      const inputValue = Number(event.currentTarget.value);
      setInputMonth(inputValue.toString());
    };
    const addYear = () => {
      if (isNaN(Number(year))) return;
      const newDate = setYear(startDate, Number(year));
      if (dateString == '--') {
        setStartDate(setYear(new Date(), Number(new Date().getFullYear())));
      } else {
        setStartDate(newDate);
      }
    };
    const handleYearInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputYear('');
      if (event.currentTarget.value == '') {
        return;
      }
      const inputValue = Number(event.currentTarget.value);
      setInputYear(inputValue.toString());
    };

    const checkInput = () => {
      if (day.length == 1) {
        setInputDay('0' + day);
      }
      if (month.length == 1) {
        setInputMonth('0' + month);
      }
    };

    const datePickerClasses: string = classNames('date-input__date-picker', {
      'date-input__date-picker': day == '' || month == '' || year == '',
      'date-input__date-picker--open': (day != '' && month != '' && year != '') || !!open
    });
    const dateInputWrapperClasses: string = classNames('date-input__wrapper', {
      'input__wrapper--error': (isNaN(Date.parse(dateString)) && dateString != '--') || error,
      'input__wrapper--disabled': disabled
    });
    const allInputClasses: string = classNames(
      { input: !isNaN(Date.parse(dateString)) && dateString == '--' },
      {
        'input--error': (isNaN(Date.parse(dateString)) && dateString != '--') || error
      },
      inputClasses
    );

    return (
      <div className="date-input" id={id} {...props}>
        <p className="input__label">{label}</p>
        {!!subtitle && <p className="input__subtitle">{subtitle}</p>}
        <div className={dateInputWrapperClasses}>
          {!hideDay && (
            <Input
              ref={dayRef}
              id={id ? id + '-day' : undefined}
              label={dayLabel}
              className={classNames(allInputClasses, 'date-input__day-n-month')}
              disabled={disabled}
              onChange={(e) => {
                handleDayInputChange(e);
              }}
              value={day}
              placeholder="DD"
              onBlur={() => {
                addDay();
                checkInput();
              }}
            />
          )}
          {!hideMonth && (
            <Input
              ref={monthRef}
              id={id ? id + '-month' : undefined}
              label={monthLabel}
              className={classNames(allInputClasses, 'date-input__day-n-month')}
              disabled={disabled}
              onChange={(e) => handleMonthInputChange(e)}
              value={month}
              placeholder="MM"
              onBlur={() => {
                addMonth();
                checkInput();
              }}
            />
          )}
          {!hideYear && (
            <Input
              ref={yearRef}
              id={id ? id + '-year' : undefined}
              label={yearLabel}
              className={classNames(allInputClasses, 'date-input__year')}
              disabled={disabled}
              onChange={(e) => handleYearInputChange(e)}
              value={year}
              placeholder="YYYY"
              onBlur={() => {
                addYear();
                checkInput();
              }}
            />
          )}
          <button className={datePickerClasses}>
            <DateRange className="date-input__date-range" />
            <div className="-mt-6">
              <DatePicker
                selected={startDate}
                className="date-input__date-picker-input"
                onCalendarOpen={() => setOpen(true)}
                onCalendarClose={() => setOpen(false)}
                onChange={(date: Date) => {
                  setStartDate(date);
                  setInputDay(date.getDate().toString());
                  setInputMonth((date.getUTCMonth() + 1).toString());
                  setInputYear(date.getFullYear().toString());
                }}
              />
            </div>
          </button>
        </div>
        {(!!errorMsg || !!caption) && (
          <p
            className={classNames('input__caption', {
              'input__caption--error':
                (isNaN(Date.parse(dateString)) && dateString != '--' && !disabled) || error
            })}
          >
            {(isNaN(Date.parse(dateString)) && dateString != '--' && !!errorMsg && !disabled) ||
            error ? (
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
