import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import {
  ChevronLeftIcon as LeftIcon,
  ChevronRightIcon as RightIcon
} from '../../../svgIcons/Navigation';
import BaseButton from '../Button/BaseButton';

export interface PaginationObject {
  selected: number;
}
export interface PaginationProps {
  pageCount: number;
  previousAriaLabel?: string;
  nextAriaLabel?: string;
  initialPage?: number;
  boundaryPagesCount?: number;
  siblingsCount?: number;
  forcePage?: number;
  caption?: ReactNode;
  nextLabel?: ReactNode;
  previousLabel?: ReactNode;
  breakLabel?: ReactNode | string;
  className?: string;
  pageClassName?: string;
  activeClassName?: string;
  previousClassName?: string;
  nextClassName?: string;
  breakClassName?: string;
  onPageChange?: (selected: PaginationObject) => void;
  onPageActive?: (selected: PaginationObject) => void;
  ariaLabelBuilder?: (selected: number) => string;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  previousAriaLabel,
  nextAriaLabel,
  forcePage,
  caption,
  className,
  pageClassName,
  activeClassName,
  previousClassName,
  nextClassName,
  breakClassName,
  onPageChange,
  onPageActive,
  ariaLabelBuilder,
  initialPage = 1,
  boundaryPagesCount = 1,
  siblingsCount = 1,
  breakLabel = '...',
  nextLabel = <RightIcon className="idsk-pagination__button-icon" />,
  previousLabel = <LeftIcon className="idsk-pagination__button-icon" />
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const getLinkClassName = (active: boolean) => {
    return classNames(
      'idsk-pagination__button',
      { 'idsk-pagination__button--active': active },
      { activeClassName: !!activeClassName && active },
      pageClassName
    );
  };

  const breakLabelClassnames = classNames('idsk-pagination__button-break', breakClassName);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      if (currentPage === page) {
        if (!!onPageActive) {
          onPageActive({ selected: page });
        }
      } else {
        setCurrentPage(page);

        if (!!onPageChange) {
          onPageChange({ selected: page });
        }
      }
    }
  };

  const handleAriaLabelBuilder = (page: number): string => {
    return (!!ariaLabelBuilder ? ariaLabelBuilder(page) : page).toString();
  };

  useEffect(() => {
    if (!!forcePage) {
      handlePageChange(forcePage);
    }
  }, [forcePage]);

  if (boundaryPagesCount > pageCount / 2) {
    boundaryPagesCount = Math.floor(pageCount / 2);
  }

  const pagesArray = Array.from({ length: pageCount }, (_, index) => index + 1);
  let leftIndex = currentPage - siblingsCount;
  let rightIndex = currentPage + siblingsCount;

  const hitLeftBorder = currentPage - siblingsCount - boundaryPagesCount <= 2;
  const hitRightBorder = currentPage + siblingsCount + boundaryPagesCount + 1 >= pageCount;

  let displayLeftBeakLabel = !hitLeftBorder;
  let displayRightBreakLabel = !hitRightBorder;

  if (
    (hitLeftBorder && hitRightBorder) ||
    boundaryPagesCount + 2 * siblingsCount + 2 >= pageCount - 3
  ) {
    leftIndex = boundaryPagesCount + 1;
    rightIndex = pageCount - boundaryPagesCount;

    displayRightBreakLabel = false;
    displayLeftBeakLabel = false;
  } else if (hitLeftBorder) {
    leftIndex = boundaryPagesCount + 1;
    rightIndex = boundaryPagesCount + 2 * siblingsCount + 2;
  } else if (hitRightBorder) {
    leftIndex = pageCount + 1 - (boundaryPagesCount + 2 * siblingsCount + 2);
    rightIndex = pageCount - boundaryPagesCount;
  }

  const startMargins = pagesArray.slice(0, boundaryPagesCount);
  const endMargins = pagesArray.slice(-boundaryPagesCount);

  const displayedPages = pagesArray.slice(leftIndex - 1, rightIndex);

  return (
    <div className="idsk-pagination__wrapper">
      {caption && <p className="idsk-pagination__caption">{caption}</p>}
      <div className={classNames('idsk-pagination', className)}>
        <BaseButton
          key={'prevPage'}
          className={classNames('idsk-pagination__button', previousClassName)}
          ariaLabel={previousAriaLabel}
          onClick={() => {
            handlePageChange(currentPage - 1);
          }}
        >
          {previousLabel}
        </BaseButton>
        {startMargins.map((page) => (
          <BaseButton
            key={page}
            className={getLinkClassName(page === currentPage)}
            ariaLabel={handleAriaLabelBuilder(page)}
            label={`${page}`}
            onClick={() => {
              handlePageChange(page);
            }}
          />
        ))}
        {displayLeftBeakLabel && (
          <BaseButton
            key={'leftBreak'}
            ariaLabel={previousAriaLabel}
            className={breakLabelClassnames}
            onClick={() => {
              handlePageChange(currentPage - 1);
            }}
          >
            {breakLabel}
          </BaseButton>
        )}

        {displayedPages.map((page) => (
          <BaseButton
            key={page}
            className={getLinkClassName(page === currentPage)}
            ariaLabel={handleAriaLabelBuilder(page)}
            label={`${page}`}
            onClick={() => {
              handlePageChange(page);
            }}
          />
        ))}

        {displayRightBreakLabel && (
          <BaseButton
            key={'rightBreak'}
            ariaLabel={previousAriaLabel}
            className={breakLabelClassnames}
            onClick={() => {
              handlePageChange(currentPage + 1);
            }}
          >
            {breakLabel}
          </BaseButton>
        )}

        {endMargins.map((page) => (
          <BaseButton
            key={page}
            className={getLinkClassName(page === currentPage)}
            ariaLabel={handleAriaLabelBuilder(page)}
            label={`${page}`}
            onClick={() => {
              handlePageChange(page);
            }}
          />
        ))}
        <BaseButton
          key={'nextPage'}
          className={classNames('idsk-pagination__button', nextClassName)}
          ariaLabel={nextAriaLabel}
          onClick={() => {
            handlePageChange(currentPage + 1);
          }}
        >
          {nextLabel}
        </BaseButton>
      </div>
    </div>
  );
};

export default Pagination;
