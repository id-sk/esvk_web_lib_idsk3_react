import React from 'react';
import { render, screen } from '@testing-library/react';
import { HorizontalNavigation, HorizontalNavigationItem } from '../index';

describe('Horizontal Navigation', () => {
  test('render items', () => {
    render(
      <HorizontalNavigation>
        <HorizontalNavigationItem label="Priečinky" />
        <HorizontalNavigationItem label="Štítky" />
        <HorizontalNavigationItem label="Filtrovanie" />
      </HorizontalNavigation>
    );
    expect(screen.getByText('Filtrovanie')).toBeDefined();
  });
});
