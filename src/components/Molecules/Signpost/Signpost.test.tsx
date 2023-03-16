import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Signpost from './Signpost';

describe('Signpost', () => {
  test('layout', () => {
    render(<Signpost heading="Test Heading" layout="vertical" />);
    expect(screen.getByTestId('anchor-card')).toHaveClass('idsk-anchor-card--vertical');
  });
});
