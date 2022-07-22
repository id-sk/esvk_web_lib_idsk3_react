import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Signpost from './Signpost';

describe('Signpost', () => {
  test('layout', () => {
    render(<Signpost heading="Test Heading" title="test-title" layout="vertical" />);
    expect(screen.getByTitle('test-title')).toHaveClass('anchor-card--vertical');
  });
});
