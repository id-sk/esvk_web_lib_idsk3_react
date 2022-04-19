import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import MenuButton from './MenuButton';

describe('MenuButton', () => {
  test('render opened title', () => {
    render(
      <MenuButton toggleOpened={() => {}} opened={true} openedTitle="Opened" closedTitle="Closed" />
    );
    expect(screen.getByText('Opened')).toBeDefined();
  });
  test('render closed title', () => {
    render(
      <MenuButton
        toggleOpened={() => {}}
        opened={false}
        openedTitle="Opened"
        closedTitle="Closed"
      />
    );
    expect(screen.getByText('Closed')).toBeDefined();
  });
  test('calls the toggleOpened function when clicked', () => {
    const mockButtonClick = jest.fn();
    render(
      <MenuButton
        toggleOpened={mockButtonClick}
        opened={true}
        openedTitle="Opened"
        closedTitle="Closed"
      />
    );
    fireEvent.click(screen.getByText('Opened'));
    expect(mockButtonClick).toHaveBeenCalled();
  });
});
