import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Accordion from './Accordion';

describe('Accordion', () => {
  test('opens content', () => {
    const { container } = render(
      <Accordion heading="test button">
        <a href="testHref1">Test Option 1</a>
      </Accordion>
    );
    fireEvent.click(screen.getByText('test button'));
    expect(container.querySelector('.idsk-accordion__content')).toHaveClass(
      'idsk-accordion__content--open'
    );
  });

  test('renders initially open', () => {
    const { container } = render(
      <Accordion heading="test button" initiallyClosed={false}>
        <a href="testHref1">Test Option 1</a>
      </Accordion>
    );
    expect(container.querySelector('.idsk-accordion__content')).toHaveClass(
      'idsk-accordion__content--open'
    );
  });

  test('custom onClick function', () => {
    const mockButtonClick = jest.fn();
    render(
      <Accordion heading="test button" onClick={mockButtonClick}>
        <a href="testHref1">Test Option 1</a>
      </Accordion>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockButtonClick).toHaveBeenCalled();
  });
});
