import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../Input';
import DateRange from '../../../svgIcons/Actions/DateRange';
import DatePicker from 'react-datepicker';
import { format, setDate, setMonth, setYear } from 'date-fns';
import { useRifm } from 'rifm';

export interface DateInputProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  error?: boolean;
  errorMsg?: string;
  errorMessageId?: string;
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
  initialDate?: Date | null | undefined;
  onValueUpdate?: (value: string) => void;
}

const DateInput = ({
  id,
  error,
  errorMsg,
  errorMessageId,
  label,
  subtitle,
  caption,
  disabled,
  inputClasses,
  hideDay = false,
  hideMonth = false,
  hideYear = false,
  dayLabel,
  monthLabel,
  yearLabel,
  initialDate,
  onValueUpdate,
  ...props
}: DateInputProps) => {
  const dateStringFormat = 'yyyy-MM-dd';
  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const [startDate, setStartDate] = useState(initialDate ?? new Date());
  const [day, setInputDay] = useState(initialDate ? format(initialDate, 'dd') : '');
  const [month, setInputMonth] = useState(initialDate ? format(initialDate, 'MM') : '');
  const [year, setInputYear] = useState(initialDate ? format(initialDate, 'yyyy') : '');
  const [open, setOpen] = useState(false);
  const dateString = `${year}-${month}-${day}`;
  const idForAria: string = errorMessageId || uuidv4();

  const numberFormat = (str: string) => {
    return str.replace(/[^\d]+/gi, '');
  };

  useEffect(() => {
    setStartDate(initialDate ?? new Date());
    setInputDay(initialDate ? format(initialDate, 'dd') : '');
    setInputMonth(initialDate ? format(initialDate, 'MM') : '');
    setInputYear(initialDate ? format(initialDate, 'yyyy') : '');
  }, [initialDate]);

  const handleNewDate = (newDate: Date, formattedDateString: string) => {
    setStartDate(newDate);
    if (!!onValueUpdate && !disabled) {
      if (formattedDateString.length == 10) {
        onValueUpdate(format(newDate, dateStringFormat));
      } else if (formattedDateString == '--') {
        onValueUpdate('');
      }
    }
  };

  const addDay = () => {
    if (isNaN(Number(day))) return;
    const newDate = setDate(startDate, Number(day));
    handleNewDate(newDate, dateString);
  };

  const dayInputMask = useRifm({
    value: day,
    onChange: setInputDay,
    format: numberFormat
  });

  const addMonth = () => {
    if (isNaN(Number(month))) return;
    const newDate = setMonth(startDate, Number(month) - 1);
    handleNewDate(newDate, dateString);
  };

  const monthInputMask = useRifm({
    value: month,
    onChange: setInputMonth,
    format: numberFormat
  });

  const addYear = () => {
    if (isNaN(Number(year))) return;
    const newDate = setYear(startDate, Number(year));
    if (dateString == '--') {
      handleNewDate(setYear(new Date(), Number(new Date().getFullYear())), dateString);
    } else {
      handleNewDate(newDate, dateString);
    }
  };

  const yearInputMask = useRifm({
    value: year,
    onChange: setInputYear,
    format: numberFormat
  });

  const formatInputLength = () => {
    if (day.length == 1) {
      setInputDay('0' + day);
    }
    if (month.length == 1) {
      setInputMonth('0' + month);
    }
  };

  const handleDatepickerChange = (date: Date) => {
    setInputDay(format(date, 'dd'));
    setInputMonth(format(date, 'MM'));
    setInputYear(format(date, 'yyyy'));
    handleNewDate(date, format(date, dateStringFormat));
  };

  const datePickerClasses: string = classNames('date-input__date-picker', {
    'date-input__date-picker': day == '' || month == '' || year == '',
    'date-input__date-picker--open': (day != '' && month != '' && year != '') || open
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
            onChange={dayInputMask.onChange}
            value={dayInputMask.value}
            placeholder="DD"
            onBlur={() => {
              addDay();
              formatInputLength();
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
            onChange={monthInputMask.onChange}
            value={monthInputMask.value}
            placeholder="MM"
            onBlur={() => {
              addMonth();
              formatInputLength();
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
            onChange={yearInputMask.onChange}
            value={yearInputMask.value}
            placeholder="YYYY"
            onBlur={() => {
              addYear();
              formatInputLength();
            }}
          />
        )}
        <span>
          <button className={datePickerClasses}>
            <DateRange className="date-input__date-range" />
          </button>
          <div className="date-input__position">
            <DatePicker
              selected={startDate}
              className="date-input__date-picker-input"
              onCalendarOpen={() => setOpen(true)}
              onCalendarClose={() => setOpen(false)}
              onChange={handleDatepickerChange}
            />
          </div>
        </span>
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
};

export default DateInput;
