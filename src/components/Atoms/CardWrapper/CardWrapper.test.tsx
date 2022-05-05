import React from 'react';
import { render, screen } from '@testing-library/react';

import CardWrapper from './CardWrapper';

describe('CardWrapper', () => {
  test('renders the CardWrapper child', () => {
    render(
      <CardWrapper color="#FFF">
        <div data-testid="wrapperChild" />
      </CardWrapper>
    );
    expect(screen.getByTestId('wrapperChild')).toBeDefined();
  });
});
