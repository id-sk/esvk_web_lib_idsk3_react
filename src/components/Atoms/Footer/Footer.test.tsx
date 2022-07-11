import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './Footer';

describe('Footer', () => {
  test('correctly renders link list', () => {
    render(<Footer linksList={[<a>test anchor</a>]} />);
    expect(screen.getByText('test anchor')).toBeDefined();
  });
});
