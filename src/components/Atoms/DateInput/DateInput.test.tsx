import React from 'react';
import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';

import DateInput from './DateInput';

describe('DateInput', () => {
  test('renders the DateInput component', () => {
    render(<DateInput dayLabel="Day" monthLabel="Month" yearLabel="Year" />);
    expect(screen.getByText('Day')).toBeDefined();
  });
});

describe('DateInput error', () => {
  test('renders the Date Input component', () => {
    render(
      <DateInput
        dayLabel="Day"
        monthLabel="Month"
        yearLabel="Year"
        errorMsg="Bad format message"
        error={true}
      />
    );

    expect(screen.getByText('Bad format message')).toBeDefined();
  });
});
