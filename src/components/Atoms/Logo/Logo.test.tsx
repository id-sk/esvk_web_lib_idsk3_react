import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Logo from './Logo';

describe('Logo', () => {
  test('logo render', () => {
    render(<Logo title="title" subtitle="subtitle" />);
    expect(screen.getByText('subtitle')).toBeDefined();
  });
});
