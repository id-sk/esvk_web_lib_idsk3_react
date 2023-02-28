import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import { Table, TableRow, TableRowValue, TextButton } from '../../src/components';
import { MoreVertIcon } from '../../src/svgIcons/Navigation';
import { DownloadIcon } from '../../src/svgIcons/File';
import { AddIcon } from '../../src/svgIcons/Content';

export default {
  title: 'Molecules/Table',
  component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headRow: (
    <>
      <TableRowValue>Názov</TableRowValue>
      <TableRowValue>Podpísané</TableRowValue>
      <TableRowValue>Podpis</TableRowValue>
      <TableRowValue align="right">Akcie</TableRowValue>
    </>
  ),
  children: (
    <>
      <TableRow>
        <TableRowValue>Martin Mucha</TableRowValue>
        <TableRowValue>19.1.2022 o 15:32</TableRowValue>
        <TableRowValue>
          <a href="#" className="link-m font-bold">
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
        <TableRowValue>Martin Mucha</TableRowValue>
        <TableRowValue>19.1.2022 o 15:32</TableRowValue>
        <TableRowValue>
          <a href="#" className="link-m font-bold">
            Detail podpisu
          </a>
        </TableRowValue>
        <TableRowValue align="right">
          <button>
            <MoreVertIcon className="w-6 h-6" />
          </button>
        </TableRowValue>
      </TableRow>
    </>
  )
};
export const Attachments = Template.bind({});
Attachments.args = {
  headRow: (
    <>
      <TableRowValue>Názov</TableRowValue>
      <TableRowValue>Pridané</TableRowValue>
      <TableRowValue>Podpis</TableRowValue>
      <TableRowValue align="right">Akcie</TableRowValue>
    </>
  ),
  children: (
    <>
      <TableRow>
        <TableRowValue>
          <a className="link-m" href="#">
            Príloha.pdf
          </a>
        </TableRowValue>
        <TableRowValue>19.1.2022 o 15:32</TableRowValue>
        <TableRowValue>
          <a href="#" className="link-m font-bold">
            Podpísať
          </a>
        </TableRowValue>
        <TableRowValue align="right">
          <button>
            <DownloadIcon className="w-6 h-6" />
          </button>
          <button>
            <MoreVertIcon className="w-6 h-6" />
          </button>
        </TableRowValue>
      </TableRow>
      <TableRow>
        <TableRowValue>
          <a className="link-m" href="#">
            Príloha.pdf
          </a>
        </TableRowValue>
        <TableRowValue>19.1.2022 o 15:32</TableRowValue>
        <TableRowValue>
          <a href="#" className="link-m font-bold">
            Podpísať
          </a>
        </TableRowValue>
        <TableRowValue align="right">
          <button>
            <DownloadIcon className="w-6 h-6" />
          </button>
          <button>
            <MoreVertIcon className="w-6 h-6" />
          </button>
        </TableRowValue>
      </TableRow>
    </>
  )
};

export const WithoutSignatures = Template.bind({});
WithoutSignatures.args = {
  headRow: (
    <>
      <TableRowValue>Názov</TableRowValue>
      <TableRowValue>Pridané</TableRowValue>
      <TableRowValue align="right">Akcie</TableRowValue>
    </>
  ),
  children: (
    <>
      <TableRow>
        <TableRowValue>
          <a className="link-m" href="#">
            Príloha.pdf
          </a>
        </TableRowValue>
        <TableRowValue>19.1.2022 o 15:32</TableRowValue>
        <TableRowValue align="right">
          <button>
            <MoreVertIcon className="w-6 h-6" />
          </button>
        </TableRowValue>
      </TableRow>
      <TableRow>
        <TableRowValue>
          <a className="link-m" href="#">
            Príloha.pdf
          </a>
        </TableRowValue>
        <TableRowValue>19.1.2022 o 15:32</TableRowValue>
        <TableRowValue align="right">
          <button>
            <MoreVertIcon className="w-6 h-6" />
          </button>
        </TableRowValue>
      </TableRow>
    </>
  )
};

export const HeadingAndAction = Template.bind({});
HeadingAndAction.args = {
  heading: 'Prílohy',
  headRow: (
    <>
      <TableRowValue>Názov</TableRowValue>
      <TableRowValue>Pridané</TableRowValue>
      <TableRowValue>Podpis</TableRowValue>
      <TableRowValue align="right">Akcie</TableRowValue>
    </>
  ),
  actions: <TextButton label="Pridať prílohu" icon={<AddIcon />} />,
  children: (
    <>
      <TableRow>
        <TableRowValue>
          <a className="link-m" href="#">
            Príloha.pdf
          </a>
        </TableRowValue>
        <TableRowValue>19.1.2022 o 15:32</TableRowValue>
        <TableRowValue>
          <a href="#" className="link-m font-bold">
            Podpísať
          </a>
        </TableRowValue>
        <TableRowValue align="right">
          <button>
            <DownloadIcon className="w-6 h-6" />
          </button>
          <button>
            <MoreVertIcon className="w-6 h-6" />
          </button>
        </TableRowValue>
      </TableRow>
      <TableRow>
        <TableRowValue>
          <a className="link-m" href="#">
            Príloha.pdf
          </a>
        </TableRowValue>
        <TableRowValue>19.1.2022 o 15:32</TableRowValue>
        <TableRowValue>
          <a href="#" className="link-m font-bold">
            Podpísať
          </a>
        </TableRowValue>
        <TableRowValue align="right">
          <button>
            <DownloadIcon className="w-6 h-6" />
          </button>
          <button>
            <MoreVertIcon className="w-6 h-6" />
          </button>
        </TableRowValue>
      </TableRow>
    </>
  )
};

export const OnlyRows = Template.bind({});
OnlyRows.args = {
  children: (
    <>
      <TableRow>
        <TableRowValue>
          <a className="link-m" href="#">
            Príloha.pdf
          </a>
        </TableRowValue>
        <TableRowValue>19.1.2022 o 15:32</TableRowValue>
        <TableRowValue>
          <a href="#" className="link-m font-bold">
            Podpísať
          </a>
        </TableRowValue>
        <TableRowValue align="right">
          <button>
            <DownloadIcon className="w-6 h-6" />
          </button>
          <button>
            <MoreVertIcon className="w-6 h-6" />
          </button>
        </TableRowValue>
      </TableRow>
      <TableRow>
        <TableRowValue>
          <a className="link-m" href="#">
            Príloha.pdf
          </a>
        </TableRowValue>
        <TableRowValue>19.1.2022 o 15:32</TableRowValue>
        <TableRowValue>
          <a href="#" className="link-m font-bold">
            Podpísať
          </a>
        </TableRowValue>
        <TableRowValue align="right">
          <button>
            <DownloadIcon className="w-6 h-6" />
          </button>
          <button>
            <MoreVertIcon className="w-6 h-6" />
          </button>
        </TableRowValue>
      </TableRow>
    </>
  )
};
