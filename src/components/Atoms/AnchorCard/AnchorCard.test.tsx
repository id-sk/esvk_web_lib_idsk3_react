import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AnchorCard from './AnchorCard';

describe('AnchorCard', () => {
  test('layout', () => {
    render(<AnchorCard title="test-title" layout="vertical" />);
    expect(screen.getByTitle('test-title')).toHaveClass('anchor-card--vertical');
  });
});
