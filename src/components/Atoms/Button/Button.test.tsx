import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Button label="Hello world!" />);
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('passes the disabled property to the button element', () => {
    render(<Button disabled label="Hello world!" />);
    expect(screen.getByRole('button').hasAttribute('disabled')).toBeTruthy();
  });

  test('sets the aria-disabled attribute when disabled', () => {
    render(<Button disabled label="Hello world!" />);
    expect(screen.getByRole('button').getAttribute('aria-disabled')).toBeTruthy();
  });

  test('calls the onClick function when clicked', () => {
    const mockButtonClick = jest.fn();
    render(<Button onClick={mockButtonClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockButtonClick).toHaveBeenCalled();
  });

  test('does not call onClick function when disabled', () => {
    const mockButtonClick = jest.fn();
    render(<Button disabled onClick={mockButtonClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockButtonClick).not.toHaveBeenCalled();
  });

  test('passes the buttonElementProps to the button element', () => {
    render(<Button buttonElementProps={{ type: 'submit' }} />);
    expect(screen.getByRole('button').getAttribute('type')).toBe('submit');
  });
});
