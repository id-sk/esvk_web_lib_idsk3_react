import React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import classNames from 'classnames';

import {
  ChevronLeftIcon as LeftIcon,
  ChevronRightIcon as RightIcon
} from '../../../svgIcons/Navigation';

const Pagination = (props: ReactPaginateProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<RightIcon className="pagination__button-icon" />}
      previousLabel={<LeftIcon className="pagination__button-icon" />}
      className={classNames('pagination', props.className)}
      pageLinkClassName="pagination__button"
      previousLinkClassName="pagination__button"
      nextLinkClassName="pagination__button"
      activeLinkClassName="pagination__button--active"
      breakLinkClassName="pagination__button-break"
      {...props}
    />
  );
};

export default Pagination;
