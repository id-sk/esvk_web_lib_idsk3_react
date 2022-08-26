import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tooltip from './Tooltip';

describe('Tooltip', () => {
  test('renders children', () => {
    render(<Tooltip>Test</Tooltip>);
    expect(screen.getByText('Test')).toBeDefined();
  });
});
