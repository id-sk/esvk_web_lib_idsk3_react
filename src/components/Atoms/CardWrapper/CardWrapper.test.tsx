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

  test('renders alert border', () => {
    render(<CardWrapper color="#FFF" highlighted={true} />);
    expect(screen.getByTestId('alertDiv')).toBeDefined();
  });
});
