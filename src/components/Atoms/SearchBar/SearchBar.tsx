import React, { useState, useRef, ReactNode } from 'react';
import classNames from 'classnames';
import { SearchIcon } from '../../../svgIcons/Actions';
import IconLink from '../IconLink';

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  buttonLabel?: string | ReactNode;
  buttonDisabled?: boolean;
  buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  searchbarSize?: 'large' | 'medium' | 'small';
  openable?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
  wrapperClassName?: string;
  error?: boolean;
  errorMsg?: string;
}

const SearchBar = ({
  buttonLabel,
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
  ...props
}: SearchBarProps) => {
  const [searchbarOpened, setSearchbarOpened] = useState<boolean>(false);

  const inputClasses: string = classNames(
    'searchbar',
    {
      'searchbar--large': searchbarSize === 'large',
      'searchbar--medium': searchbarSize === 'medium',
      'searchbar--small': searchbarSize === 'small',
      'searchbar--w-full': fullWidth
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
  const contentClasses = classNames(
    {
      relative: fullWidth,
      searchbar__wrapper: !fullWidth,
      hidden: openable && !searchbarOpened
    },
    wrapperClassName
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

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
        <input
          className={inputClasses}
          placeholder={placeholder}
          id={id ? id + '-input' : undefined}
          {...props}
        />
        <button
          onClick={buttonOnClick}
          className={buttonClasses}
          disabled={buttonDisabled}
          ref={buttonRef}
          id={id ? id + '-button' : undefined}
        >
          <SearchIcon className={iconClasses} />
          {buttonLabel}
        </button>
      </div>
      {error && !!errorMsg && <p className="input__caption--error">{errorMsg}</p>}
    </div>
  );
};

export default SearchBar;
