import React, { useState, useRef, ReactNode } from 'react';
import classNames from 'classnames';
import BaseButton from '../Button/BaseButton';
import IconLink from '../IconLink';
import { SearchIcon } from '../../../svgIcons/Actions';
import { CancelIcon } from '../../../svgIcons/Navigation';
import { useForwardRef } from '../../../utils';

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
  suggestions?: string[];
  suggestionOnClick?: (suggestion: string) => void;
}

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
      suggestions,
      suggestionOnClick,
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
      'idsk-searchbar__wrapper',
      {
        'idsk-searchbar__wrapper--full-width': fullWidth,
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
              <BaseButton className="idsk-searchbar__cancel" onClick={handleCancel}>
                <CancelIcon className={searchbarCancelIconClasses} />
              </BaseButton>
            )}
            {!!suggestions?.length && (
              <ul className="idsk-dropdown__options w-full" data-testid="dropdown-options">
                {suggestions.map((suggestion, index) => (
                  <li
                    className="idsk-dropdown__option cursor-pointer"
                    key={index}
                    onClick={() => {
                      inputRef.current.value = suggestion;
                      inputRef.current.focus();
                      suggestionOnClick?.(suggestion);
                    }}
                  >
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
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
