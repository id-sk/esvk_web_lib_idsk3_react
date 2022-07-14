import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import IdentificationCard from './IdentificationCard';

describe('IdentificationCard', () => {
  test('render', () => {
    render(
      <IdentificationCard
        firstName="Martin"
        lastName="Mucha"
        fullName="Ing. Martin Mucha"
        identification="RČ 928374/3294"
      />
    );
    expect(screen.getByText('MM')).toBeDefined();
  });
});
