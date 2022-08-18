import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import InformationBanner from './InformationBanner';

describe('InformationBanner', () => {
  test('renders the InformationBanner component', () => {
    render(<InformationBanner title="test oznamu" />);
    expect(screen.getByText('test oznamu')).toBeDefined();
  });

  test('renders without title correctly', () => {
    render(<InformationBanner>test content</InformationBanner>);
    expect(screen.getByText('test content')).toHaveClass(
      'information-banner__description--without-title'
    );
  });

  test('close banner', () => {
    render(<InformationBanner title="test oznamu" />);
    fireEvent.click(screen.getByRole('button'));
    expect(() => screen.getByText('test oznamu')).toThrow('Unable to find an element');
  });
});
