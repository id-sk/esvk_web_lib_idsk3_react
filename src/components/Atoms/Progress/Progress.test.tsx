import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';

import Progress from '../Progress';

describe('Proggress', () => {
  test('renders progress', () => {
    const { container } = render(<Progress />);
    expect(container.classList.contains('progress')).toBeDefined();
  });
});
