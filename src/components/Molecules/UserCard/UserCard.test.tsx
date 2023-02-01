import React from 'react';
import { render, screen } from '@testing-library/react';

import UserCard from './UserCard';

describe('UserCard', () => {
  test('renders the UserCard component', () => {
    render(
      <UserCard name="test name">
        <div data-testid="wrapperChild" />
      </UserCard>
    );
    expect(screen.getByTestId('wrapperChild')).toBeDefined();
  });
});
