import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AnchorCard from './AnchorCard';

describe('AnchorCard', () => {
  test('layout', () => {
    render(<AnchorCard layout="vertical" />);
    expect(screen.getByTestId('anchor-card')).toHaveClass('idsk-anchor-card--vertical');
  });
});
