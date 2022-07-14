import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import AvatarCircle from './AvatarCircle';

describe('AvatarCircle', () => {
  test('renders initials', () => {
    render(<AvatarCircle firstName="Test" lastName="Testovaci" />);
    expect(screen.getByText('TT')).toBeDefined();
  });
  test('calls the onClick function when clicked', () => {
    const mockAvatarClick = jest.fn();
    render(<AvatarCircle firstName="Test" lastName="Testovaci" onClick={mockAvatarClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockAvatarClick).toHaveBeenCalled();
  });
});
