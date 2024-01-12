import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tag from './Tag';

describe('Tag', () => {
  test('render element', () => {
    render(<Tag label="Test" />);
    expect(screen.getByText('Test')).toBeDefined();
  });
  test('render disabled correctly', () => {
    render(<Tag label="Test" disabled={true} />);
    expect(screen.getByText('Test')).toHaveClass('idsk-tag--disabled');
  });

  test('render selected correctly', () => {
    render(<Tag label="Test" type="select" selected={true} />);
    expect(screen.getByText('Test')).toHaveClass('idsk-tag--selected');
  });

  test('renders variant correctly', () => {
    render(<Tag label="Test" type="static" variant="success" />);
    expect(screen.getByText('Test')).toHaveClass('idsk-tag--success');
  });

  test('is unable to set variant of disabled tag', () => {
    render(<Tag label="Test" type="static" variant="success" disabled />);
    expect(screen.getByText('Test')).not.toHaveClass('idsk-tag--success');
  });

  test('has custom colors', () => {
    render(
      <Tag
        label="Test"
        type="static"
        colors={{
          color: '#4287f5',
          border: '#FF4587',
          background: '#121212'
        }}
      />
    );
    expect(screen.getByText('Test')).toHaveStyle({
      color: '#4287f5',
      borderColor: '#FF4587',
      backgroundColor: '#121212'
    });
  });

  test('calls onCLose in action type tag', () => {
    const mockOnClick = jest.fn();
    render(<Tag label="Test" type="action" onClose={mockOnClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toBeCalled();
  });
});
