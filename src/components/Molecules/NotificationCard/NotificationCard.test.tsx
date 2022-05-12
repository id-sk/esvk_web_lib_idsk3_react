import React from 'react';
import { render, screen } from '@testing-library/react';

import NotificationCard from './NotificationCard';

describe('NotificationCard', () => {
  test('renders the NotificationCard component', () => {
    render(
      <NotificationCard color="#FFF" date={new Date()} title="test title">
        <div data-testid="wrapperChild" />
      </NotificationCard>
    );
    expect(screen.getByTestId('wrapperChild')).toBeDefined();
  });

  test('renders alert border', () => {
    render(
      <NotificationCard color="#FFF" date={new Date()} title="test title" highlighted={true} />
    );
    expect(screen.getByTestId('unread-alert')).toBeDefined();
  });

  test('correctly parse actions', () => {
    render(
      <NotificationCard
        color="#FFF"
        date={1648641077221}
        title="test title"
        actions={[{ label: 'testLabel', href: 'testHref' }]}
      />
    );
    expect(screen.getByText('testLabel').getAttribute('href')).toEqual('testHref');
  });

  test('correctly parse date', () => {
    render(
      <NotificationCard date={1648641077221} title="test title" dateFormatString="dd-MM-yyy" />
    );
    expect(screen.getByText('30-03-2022')).toBeDefined();
  });
});
