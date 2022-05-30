import React from 'react';
import { render, screen } from '@testing-library/react';

import VerticalEventCard from './VerticalEventCard';

describe('VerticalEventCard', () => {
  test('renders the EventCard component', () => {
    render(
      <VerticalEventCard color="#FFF" date={new Date()} title="test title">
        <div data-testid="wrapperChild" />
      </VerticalEventCard>
    );
    expect(screen.getByTestId('wrapperChild')).toBeDefined();
  });

  test('correctly parse date', () => {
    render(<VerticalEventCard color="#FFF" date={1648641077221} title="test title" />);
    expect(screen.getByText('30')).toBeDefined();
  });

  test('correctly parse month', () => {
    render(<VerticalEventCard color="#FFF" date={1648641077221} title="test title" />);
    expect(screen.getByText('Mar')).toBeDefined();
  });
});
