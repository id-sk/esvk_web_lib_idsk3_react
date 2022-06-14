import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ModalSideBar from './ModalSideBar';
import ModalSideBarFooterButton from './ModalSideBarFooterButton';

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
        footerButton={
          <ModalSideBarFooterButton onClick={mockButtonClick}>Test Button</ModalSideBarFooterButton>
        }
      />
    );
    fireEvent.click(screen.getByText('Test Button'));
    expect(mockButtonClick).toHaveBeenCalled();
  });
  test('renders href attribute on footerButton', () => {
    render(
      <ModalSideBar
        heading="Test Heading"
        opened={false}
        toggleOpened={() => {}}
        footerButton={
          <ModalSideBarFooterButton href="testHref">Test Href</ModalSideBarFooterButton>
        }
      />
    );
    expect(screen.getByText('Test Href').getAttribute('href')).toEqual('testHref');
  });
});
