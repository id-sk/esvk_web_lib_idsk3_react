import React, { ReactNode } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import classNames from 'classnames';
import {
  ChevronLeftIcon as LeftIcon,
  ChevronRightIcon as RightIcon
} from '../../../svgIcons/Navigation';

export interface PaginationProps extends ReactPaginateProps {
  caption?: ReactNode;
}

const Pagination = ({ caption, ...props }: PaginationProps) => {
  return (
    <div className="pagination__wrapper">
      {caption && <p className="pagination__caption">{caption}</p>}
      <ReactPaginate
        {...props}
        breakLabel="..."
        nextLabel={<RightIcon className="pagination__button-icon" />}
        previousLabel={<LeftIcon className="pagination__button-icon" />}
        className={classNames('pagination', props.className)}
        pageLinkClassName="pagination__button"
        previousLinkClassName="pagination__button"
        nextLinkClassName="pagination__button"
        activeLinkClassName="pagination__button--active"
        breakLinkClassName="pagination__button-break"
      />
    </div>
  );
};

export default Pagination;
