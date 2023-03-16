import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tag from './Tag';

describe('Tag', () => {
  test('render element', () => {
    render(<Tag label="Test" />);
    expect(screen.getByText('Test')).toBeDefined();
  });
  test('render disabled correctly', () => {
    render(<Tag label="Test" disabled={true} interaction={true} variant="success" />);
    expect(screen.getByText('Test')).toHaveClass('idsk-tag--disabled');
  });
  test('render disabled variant correctly', () => {
    render(<Tag label="Test" disabled={true} interaction={true} variant="success" />);
    expect(screen.getByText('Test')).not.toHaveClass('idsk-tag--success');
  });
  test('render selected correctly', () => {
    render(<Tag label="Test" interaction={true} selected={true} />);
    expect(screen.getByText('Test')).toHaveClass('idsk-tag--selected');
  });
});
