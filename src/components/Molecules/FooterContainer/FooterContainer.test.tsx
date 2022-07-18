import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FooterContainer from './FooterContainer';

describe('FooterContainer render', () => {
  test('correctly renders link list', () => {
    render(<FooterContainer linksList={[<a key={1}>test anchor</a>]} />);
    expect(screen.getByText('test anchor')).toBeDefined();
  });
});
