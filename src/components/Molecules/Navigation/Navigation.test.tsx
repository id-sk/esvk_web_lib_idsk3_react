import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation, NavigationLink, NavigationLinkOption } from './index';

describe('Navigation', () => {
  test('renders link', () => {
    render(
      <Navigation>
        <NavigationLink label="Test Link" href="testHref" />
      </Navigation>
    );
    expect(screen.getByText('Test Link')).toBeDefined();
  });

  test('renders link href correctly', () => {
    render(
      <Navigation>
        <NavigationLink label="Test Link" href="testHref" />
      </Navigation>
    );
    expect(screen.getByText('Test Link').getAttribute('href')).toEqual('testHref');
  });

  test('renders link title correctly', () => {
    render(
      <Navigation>
        <NavigationLink label="Test Link" href="testHref" title="Test Link Title" />
      </Navigation>
    );
    expect(screen.getByText('Test Link').getAttribute('title')).toEqual('Test Link Title');
  });

  test('calls the onClick function when clicked', () => {
    const mockLinkClick = jest.fn();
    render(
      <Navigation>
        <NavigationLink label="Test Link" onClick={mockLinkClick} />
      </Navigation>
    );
    fireEvent.click(screen.getByText('Test Link'));
    expect(mockLinkClick).toHaveBeenCalled();
  });

  test('renders dropDown options href correctly', () => {
    render(
      <Navigation>
        <NavigationLink label="Test dropDown">
          <NavigationLinkOption label="Test Option" href="testHref" />
        </NavigationLink>
      </Navigation>
    );
    expect(screen.getByText('Test Option').getAttribute('href')).toEqual('testHref');
  });
});
