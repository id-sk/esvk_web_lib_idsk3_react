import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HeaderContainer from './HeaderContainer';

describe('HeaderContainer', () => {
  test('check fixed postion', () => {
    render(<HeaderContainer fixed={true} data-testid="header-test" />);
    expect(screen.getByTestId('header-test')).toHaveClass('sticky');
  });
  test('renders children', () => {
    render(
      <HeaderContainer>
        <nav>test child</nav>
      </HeaderContainer>
    );
    expect(screen.getByText('test child')).toBeInTheDocument();
  });
});
