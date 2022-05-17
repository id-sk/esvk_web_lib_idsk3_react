import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ModalSideBar from './ModalSideBar';

describe('ModalSideBar', () => {
  test('renders heading', () => {
    render(<ModalSideBar heading="Test Heading" opened={true} toggleOpened={() => {}} />);
    expect(screen.getByText('Test Heading')).toBeDefined();
  });
  test('opening', () => {
    render(<ModalSideBar heading="Test Heading" opened={false} toggleOpened={() => {}} />);
    expect(screen.getByTestId('sidebar-shadow')).toHaveClass('modal-sidebar__shadow--hidden');
  });
  test('calls the onClick function when footerButton clicked', () => {
    const mockButtonClick = jest.fn();
    render(
      <ModalSideBar
        heading="Test Heading"
        opened={false}
        toggleOpened={() => {}}
        footerButtonLabel="Test Button"
        footerButtonOnClick={mockButtonClick}
      />
    );
    fireEvent.click(screen.getByText('Test Button'));
    expect(mockButtonClick).toHaveBeenCalled();
  });
});
