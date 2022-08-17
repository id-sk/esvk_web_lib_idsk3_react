import React from 'react';
import { render, screen } from '@testing-library/react';
import DataGrid, { DataGridItem, DataGridItemValue } from './DataGrid';

describe('DataGrid', () => {
  test('renders children', () => {
    render(
      <DataGrid>
        <DataGridItemValue>test</DataGridItemValue>
      </DataGrid>
    );
    expect(screen.getByText('test')).toBeDefined();
  });
  test('renders head', () => {
    render(
      <DataGrid headItems={<DataGridItemValue>Test head</DataGridItemValue>}>
        <DataGridItem>Test item</DataGridItem>
      </DataGrid>
    );
    expect(screen.getByText('Test head')).toBeDefined();
  });
});
