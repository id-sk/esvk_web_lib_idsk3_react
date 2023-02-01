import React from 'react';
import { render, screen } from '@testing-library/react';

import DeviceCard from './DeviceCard';

describe('DeviceCard', () => {
  test('renders the DeviceCard component', () => {
    render(
      <DeviceCard title="test title">
        <div data-testid="wrapperChild" />
      </DeviceCard>
    );
    expect(screen.getByTestId('wrapperChild')).toBeDefined();
  });
});
