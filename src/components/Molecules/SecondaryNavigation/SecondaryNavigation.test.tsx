import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SecondaryNavigation from './SecondaryNavigation';

describe('SecondaryNavigation', () => {
  test('renders title', () => {
    render(<SecondaryNavigation heading="test title" />);
    expect(screen.getByText('test title')).toBeDefined();
  });
  test('opens options dropdown', () => {
    render(
      <SecondaryNavigation
        dropDownTitle="test title"
        dropDownOptions={[<a href="testHref1">Test Option 1</a>]}
      />
    );
    fireEvent.click(screen.getByText('test title'));
    expect(screen.getByTestId('dropdown-options')).not.toHaveClass('hidden');
  });
  test('opens children', () => {
    render(
      <SecondaryNavigation headingButton="test title">
        <div>Test Child</div>
      </SecondaryNavigation>
    );
    fireEvent.click(screen.getByText('test title'));
    expect(screen.getByTestId('secnav-children')).not.toHaveClass('hidden');
  });
});
