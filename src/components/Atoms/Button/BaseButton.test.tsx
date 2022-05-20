import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import BaseButton from './BaseButton';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<BaseButton label="Hello world!" />);
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('passes the disabled property to the button element', () => {
    render(<BaseButton disabled label="Hello world!" />);
    expect(screen.getByRole('button').hasAttribute('disabled')).toBeTruthy();
  });

  test('passes the fullWidth property to the button element', () => {
    render(<BaseButton fullWidth label="Hello world!" />);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  test('sets the aria-disabled attribute when disabled', () => {
    render(<BaseButton disabled label="Hello world!" />);
    expect(screen.getByRole('button').getAttribute('aria-disabled')).toBeTruthy();
  });

  test('calls the onClick function when clicked', () => {
    const mockButtonClick = jest.fn();
    render(<BaseButton onClick={mockButtonClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockButtonClick).toHaveBeenCalled();
  });

  test('does not call onClick function when disabled', () => {
    const mockButtonClick = jest.fn();
    render(<BaseButton disabled onClick={mockButtonClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockButtonClick).not.toHaveBeenCalled();
  });

  test('passes the buttonElementProps to the button element', () => {
    render(<BaseButton buttonElementProps={{ type: 'submit' }} />);
    expect(screen.getByRole('button').getAttribute('type')).toBe('submit');
  });
});
