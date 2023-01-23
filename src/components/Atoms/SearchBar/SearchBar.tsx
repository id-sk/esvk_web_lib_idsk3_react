import React, { useState, useRef, ReactNode, useEffect, ForwardedRef } from 'react';
import classNames from 'classnames';
import { SearchIcon } from '../../../svgIcons/Actions';
import IconLink from '../IconLink';
import CancelIcon from '../../../svgIcons/Navigation/Cancel';

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  buttonLabel?: string | ReactNode;
  buttonAriaLabel?: string;
  buttonDisabled?: boolean;
  buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  searchbarSize?: 'large' | 'medium' | 'small';
  openable?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
  wrapperClassName?: string;
  error?: boolean;
  errorMsg?: string;
  label?: string;
  showCancelButton?: boolean;
  onCancel?: () => void;
}

const useForwardRef = <T,>(ref: ForwardedRef<T>, initialValue: any = null) => {
  const targetRef = useRef<T>(initialValue);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      buttonLabel,
      buttonAriaLabel,
      buttonDisabled,
      placeholder,
      searchbarSize = 'large',
      openable = false,
      fullWidth = false,
      containerClassName,
      wrapperClassName,
      className,
      buttonOnClick,
      id,
      style,
      error,
      errorMsg,
      label,
      showCancelButton,
      onCancel,
      ...props
    }: SearchBarProps,
    ref
  ) => {
    const [searchbarOpened, setSearchbarOpened] = useState<boolean>(false);

    const inputClasses: string = classNames(
      'searchbar',
      {
        'searchbar--large': searchbarSize === 'large',
        'searchbar--medium': searchbarSize === 'medium',
        'searchbar--small': searchbarSize === 'small',
        'searchbar--w-full': fullWidth,
        'searchbar--error': error
      },
      className
    );
    const buttonClasses: string = classNames('searchbar__button', {
      'searchbar__button--large': searchbarSize === 'large',
      'searchbar__button--medium': searchbarSize === 'medium',
      'searchbar__button--small': searchbarSize === 'small'
    });
    const iconClasses: string = classNames({
      'searchbar__icon--large': searchbarSize === 'large',
      'searchbar__icon--medium': searchbarSize === 'medium',
      'searchbar__icon--small': searchbarSize === 'small'
    });

    const searchbarCancelIconClasses: string = classNames({
      'searchbar__cancel-icon--large': searchbarSize === 'large'
    });

    const contentClasses = classNames(
      {
        relative: fullWidth,
        searchbar__wrapper: !fullWidth,
        hidden: openable && !searchbarOpened
      },
      wrapperClassName
    );

    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const handleCancel = () => {
      if (!!inputRef.current) {
        inputRef.current.value = '';
      }

      if (!!onCancel) onCancel();
    };

    return (
      <div className={containerClassName}>
        {openable && (
          <IconLink
            children={<SearchIcon />}
            onClick={() => setSearchbarOpened((p) => !p)}
            className={searchbarOpened ? 'hidden' : ''}
          />
        )}
        <div className={contentClasses}>
          <label className="sr-only" htmlFor={id ? id + '-input' : undefined}>
            {label}
          </label>
          <div className="relative w-full dm1:w-auto">
            <input
              className={inputClasses}
              placeholder={placeholder}
              id={id ? `${id}-input` : undefined}
              ref={inputRef}
              {...props}
            />

            {!!showCancelButton && (
              <button className="searchbar__cancel" onClick={handleCancel}>
                <CancelIcon className={searchbarCancelIconClasses} />
              </button>
            )}
          </div>
          <button
            onClick={buttonOnClick}
            className={buttonClasses}
            disabled={buttonDisabled || error}
            ref={buttonRef}
            id={id ? id + '-button' : undefined}
            aria-label={buttonAriaLabel}
          >
            <SearchIcon className={iconClasses} />
            {buttonLabel}
          </button>
        </div>
        {error && !!errorMsg && <p className="input__caption--error">{errorMsg}</p>}
      </div>
    );
  }
);

export default SearchBar;
