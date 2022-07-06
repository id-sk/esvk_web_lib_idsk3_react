import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PublicFooter from './PublicFooter';

describe('PublicFooter', () => {
  test('correctly renders link list', () => {
    render(<PublicFooter linksList={[<a>test anchor</a>]} />);
    expect(screen.getByText('test anchor')).toBeDefined();
  });
});
