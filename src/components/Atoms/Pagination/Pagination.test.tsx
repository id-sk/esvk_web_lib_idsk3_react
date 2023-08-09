import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('renders the pagination component', () => {
    render(<Pagination pageCount={10} previousAriaLabel="Previous" nextAriaLabel="Next" />);
  });

  it('calls onPageChange when a page is clicked', () => {
    const onPageChange = jest.fn();
    const { getByText } = render(
      <Pagination
        pageCount={10}
        previousAriaLabel="Previous"
        nextAriaLabel="Next"
        onPageChange={onPageChange}
      />
    );

    fireEvent.click(getByText('2')); // Click on page 2
    expect(onPageChange).toHaveBeenCalledWith({ selected: 2 });
  });

  it('correctly handles left and right boundaries', () => {
    const { getByText, queryAllByText } = render(
      <Pagination
        pageCount={9}
        previousAriaLabel="Previous"
        nextAriaLabel="Next"
        previousLabel="Previous"
        nextLabel="Next"
        siblingsCount={1}
        boundaryPagesCount={1}
        initialPage={5}
      />
    );

    expect(queryAllByText('...').length).toBe(2);
    fireEvent.click(getByText('Previous'));
    expect(queryAllByText('...').length).toBe(1);
    fireEvent.click(getByText('Next'));
    expect(queryAllByText('...').length).toBe(2);
    fireEvent.click(getByText('Next'));
    expect(queryAllByText('...').length).toBe(1);
  });

  it('calls onPageActive when the active page is clicked', () => {
    const onActivePageClick = jest.fn();
    const { getByText } = render(
      <Pagination
        pageCount={10}
        previousAriaLabel="Previous"
        nextAriaLabel="Next"
        onPageActive={onActivePageClick}
      />
    );

    fireEvent.click(getByText('1'));
    expect(onActivePageClick).toHaveBeenCalledWith({ selected: 1 });
  });

  it('initializes to the provided initialPage', () => {
    const onActivePageClick = jest.fn();
    const { getByText } = render(
      <Pagination
        pageCount={10}
        previousAriaLabel="Previous"
        nextAriaLabel="Next"
        initialPage={7}
        onPageActive={onActivePageClick}
      />
    );

    fireEvent.click(getByText('7'));
    expect(onActivePageClick).toHaveBeenCalledWith({ selected: 7 });
  });

  it('sets the correct active page with forcePage', () => {
    const onActivePageClick = jest.fn();
    const { getByText } = render(
      <Pagination
        pageCount={10}
        previousAriaLabel="Previous"
        nextAriaLabel="Next"
        forcePage={5}
        onPageActive={onActivePageClick}
      />
    );

    fireEvent.click(getByText('5'));
    expect(onActivePageClick).toHaveBeenCalledWith({ selected: 5 });
  });

  it('doesnt trigger pageActive event, when non active page is clicked', () => {
    const onActivePageClick = jest.fn();
    const onPageChange = jest.fn();
    const { getByText } = render(
      <Pagination
        pageCount={10}
        previousAriaLabel="Previous"
        nextAriaLabel="Next"
        initialPage={2}
        onPageActive={onActivePageClick}
        onPageChange={onPageChange}
      />
    );

    fireEvent.click(getByText('5'));
    expect(onActivePageClick).toHaveBeenCalledTimes(0);
    expect(onPageChange).toHaveBeenCalledTimes(1);
  });
});
