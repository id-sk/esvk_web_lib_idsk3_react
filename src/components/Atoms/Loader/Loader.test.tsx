import React from 'react';
import { render, screen } from '@testing-library/react';

import Loader from './Loader';

describe('Loader', () => {
  test('renders with label', () => {
    render(<Loader label="Please wait ..." />);
    expect(screen.getByText('Please wait ...')).toBeDefined();
  });
});
