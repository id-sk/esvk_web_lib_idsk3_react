import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tag from './Tag';

describe('Tag', () => {
  test('render element', () => {
    render(<Tag label="Test" />);
    expect(screen.getByText('Test')).toBeDefined();
  });
});
