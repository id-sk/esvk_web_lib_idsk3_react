import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table, TableHeadValue, TableRow, TableRowValue } from './index';
import { MoreVertIcon } from '../../../svgIcons/Navigation';
import { TextButton } from '../../Atoms';
import { AddIcon } from '../../../svgIcons/Content';

describe('Table', () => {
  test('renders heading, button', () => {
    render(
      <Table
        heading="Podpisy"
        headRow={
          <>
            <TableHeadValue>Názov</TableHeadValue>
            <TableHeadValue>Pridané</TableHeadValue>
            <TableHeadValue>Podpis</TableHeadValue>
            <TableHeadValue align="right">Akcie</TableHeadValue>
          </>
        }
        actions={<TextButton label="Pridať prílohu" icon={<AddIcon />} />}
      >
        <TableRow>
          <TableRowValue>Martin Mucha</TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue>
            <a href="#" className="idsk-link-m font-bold">
              Detail podpisu
            </a>
          </TableRowValue>
          <TableRowValue align="right">
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
        <TableRow>
          <TableRowValue>Ján Novák</TableRowValue>
          <TableRowValue>19.1.2022 o 15:32</TableRowValue>
          <TableRowValue>
            <a href="#" className="idsk-link-m font-bold">
              Detail podpisu
            </a>
          </TableRowValue>
          <TableRowValue align="right">
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowValue>
        </TableRow>
      </Table>
    );
    expect(screen.getByText('Podpisy')).toBeDefined();
    expect(screen.getByText('Pridať prílohu')).toBeDefined();
  });
});
