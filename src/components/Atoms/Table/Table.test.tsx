import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table, TableRowsContainer, TableRow, TableRowItem } from './index';
import { MoreVertIcon } from '../../../svgIcons/Navigation';

describe('Table', () => {
  test('renders title, button', () => {
    render(
      <Table>
        <TableRowsContainer
          title="Podpisy"
          titles={[
            <TableRowItem key={1}>Názov</TableRowItem>,
            <TableRowItem key={2}>Podpísané</TableRowItem>,
            <TableRowItem key={3}>Podpis</TableRowItem>,
            <TableRowItem key={4} alignRight={true}>
              Akcie
            </TableRowItem>
          ]}
          addButton={true}
          addButtonLabel="Pridať prílohu"
        >
          <TableRow>
            <TableRowItem>Martin Mucha</TableRowItem>
            <TableRowItem>19.1.2022 o 15:32</TableRowItem>
            <TableRowItem>
              <a href="#" className="link-m font-bold">
                Detail podpisu
              </a>
            </TableRowItem>
            <TableRowItem alignRight={true}>
              <button>
                <MoreVertIcon className="w-6 h-6" />
              </button>
            </TableRowItem>
          </TableRow>
          <TableRow>
            <TableRowItem>Ján Novák</TableRowItem>
            <TableRowItem>19.1.2022 o 15:32</TableRowItem>
            <TableRowItem>
              <a href="#" className="link-m font-bold">
                Detail podpisu
              </a>
            </TableRowItem>
            <TableRowItem alignRight={true}>
              <button>
                <MoreVertIcon className="w-6 h-6" />
              </button>
            </TableRowItem>
          </TableRow>
        </TableRowsContainer>
      </Table>
    );
    expect(screen.getByText('Podpisy')).toBeDefined();
    expect(screen.getByText('Pridať prílohu')).toBeDefined();
  });
});
