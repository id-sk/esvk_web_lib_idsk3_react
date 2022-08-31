import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Select from './Select';

describe('Input', () => {
  test('renders component', () => {
    render(
      <Select>
        <option>test</option>
      </Select>
    );
    expect(screen.getByText('test')).toBeDefined();
  });

  test('Disabled select', () => {
    render(
      <Select disabled data-testid="select">
        <option>test</option>
      </Select>
    );
    expect(screen.getByTestId('select').hasAttribute('disabled')).toBeTruthy();
  });
});
