import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Navigation from './Navigation';

describe('Navigation', () => {
  test('renders link', () => {
    render(<Navigation links={[{ label: 'Test Link', href: 'testHref' }]} />);
    expect(screen.getByText('Test Link')).toBeDefined();
  });

  test('renders link href correctly', () => {
    render(<Navigation links={[{ label: 'Test Link', href: 'testHref' }]} />);
    expect(screen.getByText('Test Link').getAttribute('href')).toEqual('testHref');
  });

  test('calls the onClick function when clicked', () => {
    const mockLinkClick = jest.fn();
    render(<Navigation links={[{ label: 'Test Link', onClick: mockLinkClick }]} />);
    fireEvent.click(screen.getByText('Test Link'));
    expect(mockLinkClick).toHaveBeenCalled();
  });
});
