import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Feedback from './Feedback';

describe('Feedback', () => {
  test('closeButtonOnClick function', () => {
    const mockButtonClick = jest.fn();
    render(
      <Feedback
        yesButton={undefined}
        noButton={undefined}
        closeButton={undefined}
        closeButtonOnClick={mockButtonClick}
      ></Feedback>
    );
    fireEvent.click(screen.getByTestId('closeButton'));
    expect(mockButtonClick).toBeCalledTimes(1);
  });
  test('text', () => {
    render(
      <Feedback yesButton={undefined} noButton={undefined} closeButton={undefined}>
        test
      </Feedback>
    );
    expect(screen.getByText('test')).toBeDefined();
  });
  test('yesButton text', () => {
    render(<Feedback yesButton="yes" noButton="no" closeButton={undefined} />);
    expect(screen.getByText('yes')).toBeDefined();
  });
  test('noButton text', () => {
    render(<Feedback yesButton="yes" noButton="no" closeButton={undefined} />);
    expect(screen.getByText('no')).toBeDefined();
  });
});
