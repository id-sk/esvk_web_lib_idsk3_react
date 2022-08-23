import React from 'react';
import { render, screen } from '@testing-library/react';
import DataGrid, { DataGridRow, DataGridRowValue } from './DataGrid';

describe('DataGrid', () => {
  test('renders children', () => {
    render(
      <DataGrid>
        <DataGridRowValue>test</DataGridRowValue>
      </DataGrid>
    );
    expect(screen.getByText('test')).toBeDefined();
  });
  test('renders head', () => {
    render(
      <DataGrid headRow={<DataGridRowValue>Test head</DataGridRowValue>}>
        <DataGridRow>Test item</DataGridRow>
      </DataGrid>
    );
    expect(screen.getByText('Test head')).toBeDefined();
  });
});
