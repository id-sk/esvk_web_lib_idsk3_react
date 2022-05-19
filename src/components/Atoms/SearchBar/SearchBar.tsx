import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { SearchIcon } from '../../../svgIcons/Actions';

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  buttonLabel?: string;
  buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  searchbarSize?: 'large' | 'medium' | 'small';
}

const SearchBar = ({
  buttonLabel,
  placeholder,
  searchbarSize = 'large',
  className,
  buttonOnClick,
  style,
  ...props
}: SearchBarProps) => {
  const inputClasses: string = classNames(
    'searchbar',
    {
      'searchbar--large': searchbarSize === 'large',
      'searchbar--medium': searchbarSize === 'medium',
      'searchbar--small': searchbarSize === 'small'
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
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [rightPadding, setRightPadding] = useState<number | undefined>();
  useEffect(() => {
    if (!!buttonRef.current) {
      setRightPadding(buttonRef.current.offsetWidth);
    }
  }, [buttonLabel, searchbarSize]);
  return (
    <div className="searchbar__wrapper">
      <input
        className={inputClasses}
        placeholder={placeholder}
        style={{
          paddingRight: !!rightPadding ? rightPadding + 8 + 'px' : undefined,
          ...style
        }}
        {...props}
      />
      <button onClick={buttonOnClick} className={buttonClasses} ref={buttonRef}>
        <SearchIcon className={iconClasses} />
        {buttonLabel}
      </button>
    </div>
  );
};

export default SearchBar;
