import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Button label="Hello world!" />);
    expect(screen.getByRole('button')).toBeDefined();
  });
});
