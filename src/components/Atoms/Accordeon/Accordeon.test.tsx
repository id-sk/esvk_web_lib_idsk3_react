import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Accordeon from './Accordeon';

describe('Accordeon', () => {
  test('opens content', () => {
    const { container } = render(
      <Accordeon heading="test button">
        <a href="testHref1">Test Option 1</a>
      </Accordeon>
    );
    fireEvent.click(screen.getByText('test button'));
    expect(container.querySelector('.accordeon__content')).toHaveClass('accordeon__content--open');
  });

  test('renders initially open', () => {
    const { container } = render(
      <Accordeon heading="test button" initiallyClosed={false}>
        <a href="testHref1">Test Option 1</a>
      </Accordeon>
    );
    expect(container.querySelector('.accordeon__content')).toHaveClass('accordeon__content--open');
  });

  test('custom onClick function', () => {
    const mockButtonClick = jest.fn();
    render(
      <Accordeon heading="test button" onClick={mockButtonClick}>
        <a href="testHref1">Test Option 1</a>
      </Accordeon>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockButtonClick).toHaveBeenCalled();
  });
});
