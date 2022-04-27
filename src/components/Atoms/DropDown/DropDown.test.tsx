import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import DropDown from './DropDown';

describe('DropDown', () => {
  test('renders option', () => {
    render(
      <DropDown dropDownTitle="test">
        <a href="testHref1">Test Option 1</a>
        <a href="testHref2">Test Option 2</a>
      </DropDown>
    );
    expect(screen.getByText('Test Option 2')).toBeDefined();
  });

  test('renders option href', () => {
    render(
      <DropDown dropDownTitle="test">
        <a href="testHref1">Test Option 1</a>
        <a href="testHref2">Test Option 2</a>
      </DropDown>
    );
    expect(screen.getByText('Test Option 2').getAttribute('href')).toEqual('testHref2');
  });

  test('opens options', () => {
    render(
      <DropDown dropDownTitle="test title">
        <a href="testHref1">Test Option 1</a>
        <a href="testHref2">Test Option 2</a>
      </DropDown>
    );
    fireEvent.click(screen.getByText('test title'));
    expect(screen.getByTestId('dropdown-options')).not.toHaveClass('hidden');
  });
});
