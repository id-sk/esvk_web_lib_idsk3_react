import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ModalSideBar from './ModalSideBar';
import { PrimaryButton } from '../Button';

describe('ModalSideBar', () => {
  test('renders heading', () => {
    render(<ModalSideBar heading="Test Heading" opened={true} toggleOpened={() => {}} />);
    expect(screen.getByText('Test Heading')).toBeDefined();
  });
  test('opening', () => {
    render(<ModalSideBar heading="Test Heading" opened={true} toggleOpened={() => {}} />);
    expect(screen.getByTestId('sidebar-shadow')).toHaveClass('idsk-modal-sidebar__shadow');
  });
  test('calls the onClick function when footerButton clicked', () => {
    const mockButtonClick = jest.fn();
    render(
      <ModalSideBar
        heading="Test Heading"
        opened={true}
        toggleOpened={() => {}}
        footer={<PrimaryButton onClick={mockButtonClick}>Test Button</PrimaryButton>}
      />
    );
    fireEvent.click(screen.getByText('Test Button'));
    expect(mockButtonClick).toHaveBeenCalled();
  });
});
