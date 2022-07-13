import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import MenuMobile from './MenuMobile';

describe('MenuMobile', () => {
  test('renders heading', () => {
    render(<MenuMobile heading="Test Heading" />);
    expect(screen.getByText('Test Heading')).toBeDefined();
  });
});
