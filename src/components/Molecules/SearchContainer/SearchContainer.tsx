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
  label?: string;
  errorMessageId?: string;
}

const SearchContainer = React.forwardRef<HTMLInputElement, SearchContainerProps>(
  (
    {
      title,
      containerClassName,
      error,
      errorMsg,
      caption,
      searchButton,
      advancedSearchButton,
      label,
      className,
      errorMessageId,
      ...props
    },
    ref
  ) => {
    const containerClasses: string = classNames('idsk-search-container', containerClassName);

    const inputClasses: string = classNames(
      'idsk-input',
      'idsk-input--medium',
      'idsk-input--w-full',
      {
        'idsk-input--error': error
      },
      className
    );

    const idForAria: string = errorMessageId || uuidv4();

    return (
      <div className={containerClasses}>
        {!!title && (
          <div className="idsk-search-container__header">
            <h2 className="idsk-search-container__title">{title}</h2>
          </div>
        )}
        <div className="idsk-search-container__input">
          <label className="sr-only" htmlFor={idForAria + '-input'}>
            {label}
          </label>
          <input
            id={idForAria + '-input'}
            aria-invalid={error}
            aria-errormessage={idForAria}
            className={inputClasses}
            {...props}
            ref={ref}
          />
          {(!!errorMsg || !!caption) && (
            <p
              className={classNames('idsk-input__caption', {
                'idsk-input__caption--error': error
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
        <div className="idsk-search-container__buttons">
          <PrimaryButton {...searchButton} iconPosition="left" icon={<SearchIcon />} />
          <TextButton {...advancedSearchButton} />
        </div>
      </div>
    );
  }
);

export default SearchContainer;
