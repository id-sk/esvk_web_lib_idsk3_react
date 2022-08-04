import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import { Table } from '../components';
import { TableRowsContainer, TableRow, TableRowItem } from '../components/Atoms/Table/Table';
import { MoreVertIcon } from '../svgIcons/Navigation';
import { DownloadIcon } from '../svgIcons/File';

export default {
  title: 'Atoms/Table',
  component: Table
} as ComponentMeta<typeof Table>;

export const Template: ComponentStory<typeof Table> = (args) => {
  return (
    <Table>
      <TableRowsContainer
        {...args}
        title="Podpisy"
        titles={[
          <TableRowItem>Názov</TableRowItem>,
          <TableRowItem>Podpísané</TableRowItem>,
          <TableRowItem>Podpis</TableRowItem>,
          <TableRowItem alignRight={true}>Akcie</TableRowItem>
        ]}
        addButton={true}
        addButtonLabel="Pridať podpis"
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
      <TableRowsContainer
        {...args}
        title="Prílohy"
        titles={[
          <TableRowItem>Názov</TableRowItem>,
          <TableRowItem>Pridané</TableRowItem>,
          <TableRowItem>Podpis</TableRowItem>,
          <TableRowItem alignRight={true}>Akcie</TableRowItem>
        ]}
        addButton={true}
        addButtonLabel="Pridať prílohu"
      >
        <TableRow>
          <TableRowItem>
            <a className="link-m">Príloha.pdf</a>
          </TableRowItem>
          <TableRowItem>19.1.2022 o 15:32</TableRowItem>
          <TableRowItem>
            <a href="#" className="link-m font-bold">
              Podpísať
            </a>
          </TableRowItem>
          <TableRowItem alignRight={true}>
            <button>
              <DownloadIcon className="w-6 h-6" />
            </button>
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowItem>
        </TableRow>
        <TableRow>
          <TableRowItem>
            <a className="link-m">Príloha.pdf</a>
          </TableRowItem>
          <TableRowItem>19.1.2022 o 15:32</TableRowItem>
          <TableRowItem>
            <a href="#" className="link-m font-bold">
              Podpísať
            </a>
          </TableRowItem>
          <TableRowItem alignRight={true}>
            <button>
              <DownloadIcon className="w-6 h-6" />
            </button>
            <button>
              <MoreVertIcon className="w-6 h-6" />
            </button>
          </TableRowItem>
        </TableRow>
      </TableRowsContainer>
    </Table>
  );
};
