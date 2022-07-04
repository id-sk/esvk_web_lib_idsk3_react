import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TabBar, TabBarLink } from './index';

describe('TabBar', () => {
  test('renders link', () => {
    render(
      <TabBar>
        <TabBarLink href="testHref">Test Link</TabBarLink>
      </TabBar>
    );
    expect(screen.getByText('Test Link')).toBeDefined();
  });

  test('renders link href', () => {
    render(
      <TabBar>
        <TabBarLink href="testHref">Test Link</TabBarLink>
      </TabBar>
    );
    expect(screen.getByText('Test Link').getAttribute('href')).toEqual('testHref');
  });

  test('onClick function', () => {
    const mockLinkClick = jest.fn();
    render(
      <TabBar>
        <TabBarLink onClick={mockLinkClick}>Test Link</TabBarLink>
      </TabBar>
    );
    fireEvent.click(screen.getByText('Test Link'));
    expect(mockLinkClick).toHaveBeenCalled();
  });
});
