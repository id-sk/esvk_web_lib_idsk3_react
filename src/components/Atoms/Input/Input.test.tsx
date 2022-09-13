import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './Input';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';

describe('Input', () => {
  test('renders the Input component', () => {
    render(<Input placeholder="Hello world!" />);
    expect(screen.getByPlaceholderText('Hello world!')).toBeDefined();
  });

  test('passes the disabled property to the input element', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox').hasAttribute('disabled')).toBeTruthy();
  });

  test('passes the fullWidth property to the input element', () => {
    render(<Input fullWidth />);
    expect(screen.getByRole('textbox')).toHaveClass('input--w-full');
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
  test('renders the Checkbox component', () => {
    render(<Checkbox name="name" label="Text label" />);
    expect(screen.getByText('Text label')).toBeDefined();
  });
  test('renders the RadioButton component', () => {
    render(<RadioButton name="name" label="Text label" />);
    expect(screen.getByText('Text label')).toBeDefined();
  });
});
