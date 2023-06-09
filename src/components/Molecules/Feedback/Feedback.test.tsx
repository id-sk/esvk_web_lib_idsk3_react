import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Feedback from './Feedback';

describe('Feedback', () => {
  test('closeButtonOnClick function', () => {
    const mockButtonClick = jest.fn();
    render(
      <Feedback closeButton={true} closeButtonProps={{ onClick: mockButtonClick }}></Feedback>
    );
    fireEvent.click(screen.getByTestId('closeButton'));
    expect(mockButtonClick).toHaveBeenCalledTimes(1);
  });
  test('text', () => {
    render(<Feedback>test</Feedback>);
    expect(screen.getByText('test')).toBeDefined();
  });
  test('yesButton text', () => {
    render(<Feedback yesButtonProps={{ children: 'yes' }} noButtonProps={{ children: 'no' }} />);
    expect(screen.getByText('yes')).toBeDefined();
  });
  test('noButton text', () => {
    render(<Feedback yesButtonProps={{ children: 'yes' }} noButtonProps={{ children: 'no' }} />);
    expect(screen.getByText('no')).toBeDefined();
  });
  test('Feedback default close function', () => {
    render(<Feedback closeButton={true}>test</Feedback>);
    fireEvent.click(screen.getByTestId('closeButton'));
    expect(() => screen.getByText('test')).toThrow('Unable to find an element');
  });
});
