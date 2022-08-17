import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchContainer from './SearchContainer';

describe('SearchBar', () => {
  test('renders the props correctly', () => {
    render(<SearchContainer placeholder="Hello world!" />);
    expect(screen.getByPlaceholderText('Hello world!')).toBeDefined();
  });

  test('onChange function on the input element', () => {
    let testValue;
    render(<SearchContainer onChange={(e) => (testValue = e.target.value)} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Good Day' } });
    expect(testValue).toBe('Good Day');
  });

  test('calls the onClick function when search button clicked', () => {
    const mockActionClick = jest.fn();
    render(<SearchContainer searchButton={{ label: 'Search Action', onClick: mockActionClick }} />);
    fireEvent.click(screen.getByText('Search Action'));
    expect(mockActionClick).toHaveBeenCalled();
  });

  test('calls the onClick function when advanced search button clicked', () => {
    const mockActionClick = jest.fn();
    render(
      <SearchContainer
        advancedSearchButton={{ label: 'Advanced Search Action', onClick: mockActionClick }}
      />
    );
    fireEvent.click(screen.getByText('Advanced Search Action'));
    expect(mockActionClick).toHaveBeenCalled();
  });
});
