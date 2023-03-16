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
    <div className="idsk-pagination__wrapper">
      {caption && <p className="idsk-pagination__caption">{caption}</p>}
      <ReactPaginate
        {...props}
        breakLabel="..."
        nextLabel={<RightIcon className="idsk-pagination__button-icon" />}
        previousLabel={<LeftIcon className="idsk-pagination__button-icon" />}
        className={classNames('idsk-pagination', props.className)}
        pageLinkClassName="idsk-pagination__button"
        previousLinkClassName="idsk-pagination__button"
        nextLinkClassName="idsk-pagination__button"
        activeLinkClassName="idsk-pagination__button--active"
        breakLinkClassName="idsk-pagination__button-break"
      />
    </div>
  );
};

export default Pagination;
