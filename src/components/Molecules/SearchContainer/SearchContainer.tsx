import React from 'react';
import classNames from 'classnames';
import { PrimaryButton, PrimaryButtonProps, TextButton, TextButtonProps } from '../../Atoms';
import { SearchIcon } from '../../../svgIcons/Actions';
import { v4 as uuidv4 } from 'uuid';

export interface SearchContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  containerClassName?: string;
  error?: boolean;
  errorMsg?: string;
  caption?: string;
  searchButton?: PrimaryButtonProps;
  advancedSearchButton?: TextButtonProps;
}

const SearchContainer = ({
  title,
  containerClassName,
  error,
  errorMsg,
  caption,
  searchButton,
  advancedSearchButton,
  ...props
}: SearchContainerProps) => {
  const containerClasses: string = classNames('search-container', containerClassName);

  const inputClasses: string = classNames(
    'input',
    'input--medium',
    'input--w-full',
    {
      'input--error': error
    },
    props.className
  );

  const idForAria: string = uuidv4();

  return (
    <div className={containerClasses}>
      {!!title && (
        <div className="search-container__header">
          <span className="search-container__title">{title}</span>
        </div>
      )}
      <div className="search-container__input">
        <input
          aria-invalid={error}
          aria-errormessage={idForAria}
          className={inputClasses}
          {...props}
        />
        {(!!errorMsg || !!caption) && (
          <p
            className={classNames('input__caption', {
              'input__caption--error': error
            })}
          >
            {error && !!errorMsg ? (
              <span id={idForAria} role="alert">
                {errorMsg}
              </span>
            ) : (
              <span>{caption}</span>
            )}
          </p>
        )}
      </div>
      <div className="search-container__buttons">
        <PrimaryButton {...searchButton} iconPosition="left" icon={<SearchIcon />} />
        <TextButton {...advancedSearchButton} />
      </div>
    </div>
  );
};

export default SearchContainer;
