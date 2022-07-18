import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HeaderContainer from './HeaderContainer';

describe('HeaderContainer', () => {
  test('check fixed position', () => {
    render(<HeaderContainer fixed={true} data-testid="header-test" />);
    expect(screen.getByTestId('header-test')).toHaveClass('sticky');
  });
  test('renders children', () => {
    const { container } = render(
      <HeaderContainer>
        <nav>test child</nav>
      </HeaderContainer>
    );
    expect(container.getElementsByClassName('header-container').length).toBe(1);
    expect(screen.getByText('test child')).toBeInTheDocument();
  });
  test('does not render header-container when children empty', () => {
    const { container } = render(<HeaderContainer />);
    expect(container.getElementsByClassName('header-container').length).toBe(0);
  });
});
