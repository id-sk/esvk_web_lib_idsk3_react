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
      'idsk-searchbar',
      {
        'idsk-searchbar--large': searchbarSize === 'large',
        'idsk-searchbar--medium': searchbarSize === 'medium',
        'idsk-searchbar--small': searchbarSize === 'small',
        'idsk-searchbar--w-full': fullWidth,
        'idsk-searchbar--error': error
      },
      className
    );
    const buttonClasses: string = classNames('idsk-searchbar__button', {
      'idsk-searchbar__button--large': searchbarSize === 'large',
      'idsk-searchbar__button--medium': searchbarSize === 'medium',
      'idsk-searchbar__button--small': searchbarSize === 'small'
    });
    const iconClasses: string = classNames({
      'idsk-searchbar__icon--large': searchbarSize === 'large',
      'idsk-searchbar__icon--medium': searchbarSize === 'medium',
      'idsk-searchbar__icon--small': searchbarSize === 'small'
    });

    const searchbarCancelIconClasses: string = classNames({
      'idsk-searchbar__cancel-icon--large': searchbarSize === 'large'
    });

    const contentClasses = classNames(
      {
        relative: fullWidth,
        'idsk-searchbar__wrapper': !fullWidth,
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
          <div className="idsk-searchbar__input-wrapper">
            <input
              className={inputClasses}
              placeholder={placeholder}
              id={id ? `${id}-input` : undefined}
              ref={inputRef}
              {...props}
            />

            {!!showCancelButton && (
              <button className="idsk-searchbar__cancel" onClick={handleCancel}>
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
        {error && !!errorMsg && <p className="idsk-input__caption--error">{errorMsg}</p>}
      </div>
    );
  }
);

export default SearchBar;
