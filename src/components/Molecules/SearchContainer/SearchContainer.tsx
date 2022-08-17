import React from 'react';
import classNames from 'classnames';
import { PrimaryButton, PrimaryButtonProps, TextButton, TextButtonProps } from '../../Atoms';
import { SearchIcon } from '../../../svgIcons/Actions';

export interface SearchContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  containerClassName?: string;
  error?: boolean;
  errorMsg?: string;
  searchButton?: PrimaryButtonProps;
  advancedSearchButton?: TextButtonProps;
}

const SearchContainer = ({
  title,
  containerClassName,
  error,
  errorMsg,
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

  return (
    <div className={containerClasses}>
      {!!title && (
        <div className="search-container__header">
          <span className="search-container__title">{title}</span>
        </div>
      )}
      <div className="search-container__input">
        <input className={inputClasses} {...props} />
      </div>
      <div className="search-container__buttons">
        <PrimaryButton {...searchButton} iconPosition="left" icon={<SearchIcon />} />
        <TextButton {...advancedSearchButton}></TextButton>
      </div>
    </div>
  );
};

export default SearchContainer;
