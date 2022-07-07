import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import InformationBanner from './InformationBanner';

describe('InformationBanner', () => {
  test('renders the InformationBanner component', () => {
    render(<InformationBanner title="test oznamu" />);
    expect(screen.getByText('test oznamu')).toBeDefined();
  });

  test('close banner', () => {
    render(<InformationBanner title="test oznamu" />);
    fireEvent.click(screen.getByRole('button'));
    expect(() => screen.getByText('test oznamu')).toThrow('Unable to find an element');
  });
});
