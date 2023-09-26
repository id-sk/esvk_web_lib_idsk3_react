import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Accordion, { AccordionListGroup } from './Accordion';
import SvgCheck from '../../../svgIcons/Navigation/Check';

describe('Accordion', () => {
  test('opens content', () => {
    const { container } = render(
      <Accordion heading="test button" subTitle="Accordion subtitle">
        <a href="testHref1">Test Option 1</a>
      </Accordion>
    );
    fireEvent.click(screen.getByText('test button'));
    expect(container.querySelector('.idsk-accordion__content')).toHaveClass(
      'idsk-accordion__content--open'
    );
    expect(screen.getByText('Accordion subtitle')).toBeDefined();
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

  test('accordion list item number onClick function', () => {
    const mockButtonClick = jest.fn();
    render(
      <AccordionListGroup>
        <Accordion
          index={1}
          heading="test accordion"
          listItemButtonProps={{ onClick: mockButtonClick }}
        />
      </AccordionListGroup>
    );
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    expect(mockButtonClick).toHaveBeenCalled();
  });

  test('accordion list item icon', () => {
    const { container } = render(
      <AccordionListGroup>
        <Accordion index={1} heading="test accordion 1" listItemIcon={<SvgCheck />} />
        <Accordion index={2} heading="test accordion 2" />
      </AccordionListGroup>
    );

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass('idsk-accordion__list-icon');

    const numberElement = container.querySelector('.idsk-accordion__list-number');
    expect(numberElement).toBeInTheDocument();
  });

  test('accordion list item number', () => {
    const { container } = render(
      <AccordionListGroup>
        <Accordion index={1} heading="test accordion" />
        <Accordion index={2} heading="test accordion" />
      </AccordionListGroup>
    );

    const numberElement = container.querySelector('.idsk-accordion__list-number');
    expect(numberElement).toBeInTheDocument();
  });

  test('accordion list item bullet', () => {
    const { container } = render(
      <AccordionListGroup>
        <Accordion index={0} heading="test accordion" />
      </AccordionListGroup>
    );

    const bulletElement = container.querySelector('.idsk-accordion--list');
    expect(bulletElement).toBeInTheDocument();
    expect(bulletElement).toHaveClass('idsk-accordion--list-bullet');
  });

  test('accordion list item default success icon', () => {
    const { container } = render(
      <AccordionListGroup>
        <Accordion index={1} heading="test accordion" listItemVariant="success" />
      </AccordionListGroup>
    );

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass('idsk-accordion__list-icon');
  });

  test('accordion list item icon onClick function', () => {
    const mockButtonClick = jest.fn();
    const { container } = render(
      <AccordionListGroup>
        <Accordion
          index={1}
          heading="test accordion"
          listItemVariant="success"
          listItemIcon={<SvgCheck data-testid="list-item-icon" />}
          listItemButtonProps={{ onClick: mockButtonClick }}
        />
      </AccordionListGroup>
    );

    expect(screen.getByRole('list')).toHaveTextContent('test accordion');

    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveClass('idsk-button__icon');

    fireEvent.click(screen.getByTestId('list-item-icon'));
    expect(mockButtonClick).toHaveBeenCalled();
  });

  test('does not modify when child is not a valid element', () => {
    render(<AccordionListGroup>NotAnElement</AccordionListGroup>);

    const notAnElement = screen.queryByText('NotAnElement');
    expect(notAnElement).toBeNull();
  });
});
