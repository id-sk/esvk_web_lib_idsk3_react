import React from 'react';
import { render, screen } from '@testing-library/react';

import EventCard from './EventCard';

describe('EventCard', () => {
  test('renders the EventCard component', () => {
    render(
      <EventCard color="#FFF" date={new Date()} title="test title">
        <div data-testid="wrapperChild" />
      </EventCard>
    );
    expect(screen.getByTestId('wrapperChild')).toBeDefined();
  });

  test('renders alert border', () => {
    render(<EventCard color="#FFF" date={new Date()} title="test title" highlighted={true} />);
    expect(screen.getByTestId('alertDiv')).toBeDefined();
  });

  test('correctly parse date', () => {
    render(<EventCard color="#FFF" date={1648641077221} title="test title" />);
    expect(screen.getByText('30')).toBeDefined();
  });

  test('correctly parse month', () => {
    render(<EventCard color="#FFF" date={1648641077221} title="test title" />);
    expect(screen.getByText('Mar')).toBeDefined();
  });
});
