import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HeaderContainer from './HeaderContainer';

describe('HeaderContainer', () => {
  test('renders children', () => {
    const { container } = render(
      <HeaderContainer>
        <nav>test child</nav>
      </HeaderContainer>
    );
    expect(container.getElementsByClassName('idsk-header-container').length).toBe(1);
    expect(screen.getByText('test child')).toBeInTheDocument();
  });
  test('does not render header-container when children empty', () => {
    const { container } = render(<HeaderContainer />);
    expect(container.getElementsByClassName('idsk-header-container').length).toBe(0);
  });
});
