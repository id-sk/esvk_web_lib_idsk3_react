import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InPageNavigation, InPageNavigationList, InPageNavigationLink } from './index';

describe('InPageNavigation', () => {
  test('renders in page navigation', () => {
    render(
      <InPageNavigation>
        <InPageNavigationList>
          <InPageNavigationLink label="Test Link" href="testHref" />
        </InPageNavigationList>
      </InPageNavigation>
    );
    expect(screen.getByText('Test Link')).toBeDefined();
  });

  test('renders in page navigation with title', () => {
    render(
      <InPageNavigation title="Test Title">
        <InPageNavigationList>
          <InPageNavigationLink label="Test Link" href="testHref" />
        </InPageNavigationList>
      </InPageNavigation>
    );
    expect(screen.getByText('Test Title')).toBeDefined();
  });

  test('renders in page navigation with subtitle', () => {
    render(
      <InPageNavigation>
        <InPageNavigationList subtitle="Test Subtitle">
          <InPageNavigationLink label="Test Link" href="testHref" />
        </InPageNavigationList>
      </InPageNavigation>
    );
    expect(screen.getByText('Test Subtitle')).toBeDefined();
  });

  test('renders in page navigation link href correctly', () => {
    render(
      <InPageNavigation>
        <InPageNavigationList>
          <InPageNavigationLink label="Test Link" href="testHref" />
        </InPageNavigationList>
      </InPageNavigation>
    );
    expect(screen.getByText('Test Link').getAttribute('href')).toEqual('testHref');
  });

  test('calls the onClick function when clicked', () => {
    const mockLinkClick = jest.fn();
    render(
      <InPageNavigation>
        <InPageNavigationList>
          <InPageNavigationLink label="Test Link" onClick={mockLinkClick} />
        </InPageNavigationList>
      </InPageNavigation>
    );
    fireEvent.click(screen.getByText('Test Link'));
    expect(mockLinkClick).toHaveBeenCalled();
  });
});
