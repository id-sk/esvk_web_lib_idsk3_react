import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  test('renders the Input component', () => {
    render(<Input placeholder="Hello world!" />);
    expect(screen.getByPlaceholderText('Hello world!')).toBeDefined();
  });

  test('passes the disabled property to the input element', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox').hasAttribute('disabled')).toBeTruthy();
  });

  test('onChange function on the input element', () => {
    let testValue;
    render(<Input onChange={(e) => (testValue = e.target.value)} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Good Day' } });
    expect(testValue).toBe('Good Day');
  });

  test('calls the onClick function when action button clicked', () => {
    const mockActionClick = jest.fn();
    render(<Input actionButton={{ label: 'Test Action', onClick: mockActionClick }} />);
    fireEvent.click(screen.getByText('Test Action'));
    expect(mockActionClick).toHaveBeenCalled();
  });
});
