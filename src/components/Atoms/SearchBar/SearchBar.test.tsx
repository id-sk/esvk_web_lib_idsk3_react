import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('renders the props correctly', () => {
    render(<SearchBar placeholder="Hello world!" />);
    expect(screen.getByPlaceholderText('Hello world!')).toBeDefined();
  });

  test('onChange function on the input element', () => {
    let testValue;
    render(<SearchBar onChange={(e) => (testValue = e.target.value)} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Good Day' } });
    expect(testValue).toBe('Good Day');
  });

  test('calls the onClick function when action button clicked', () => {
    const mockActionClick = jest.fn();
    render(<SearchBar buttonOnClick={mockActionClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockActionClick).toHaveBeenCalled();
  });
});
