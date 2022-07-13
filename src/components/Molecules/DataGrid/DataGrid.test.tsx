import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataGrid, { DataGridGroup } from './index';
import { MoreVertIcon } from '../../../svgIcons/Navigation';

describe('DataGrid', () => {
  test('renders children', () => {
    render(
      <DataGridGroup>
        <DataGrid title="NCZI" date="15.2.2022">
          Test
        </DataGrid>
      </DataGridGroup>
    );
    expect(screen.getByText('Test')).toBeDefined();
  });
  test('renders icon', () => {
    render(
      <DataGridGroup>
        <DataGrid title="NCZI" date="15.2.2022" moreIcon={<MoreVertIcon />}>
          Test
        </DataGrid>
      </DataGridGroup>
    );
    expect(screen.getByTestId('moreButton')).toBeDefined();
  });
  test('renders title', () => {
    render(
      <DataGridGroup>
        <DataGrid title="NCZI" date="15.2.2022" moreIcon={<MoreVertIcon />}>
          Test
        </DataGrid>
      </DataGridGroup>
    );
    expect(screen.getByTestId('title')).toBeDefined();
  });
  test('moreOnClick', () => {
    const mockLinkClick = jest.fn();
    render(
      <DataGridGroup>
        <DataGrid title="NCZI" date="15.2.2022" moreOnClick={mockLinkClick}>
          Test
        </DataGrid>
      </DataGridGroup>
    );
    fireEvent.click(screen.getByTestId('moreButton'));
    expect(mockLinkClick).toHaveBeenCalled();
  });
});
