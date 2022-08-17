import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import {
  DataGrid,
  DataGridItem,
  DateInput,
  IconLink,
  Input,
  PrimaryButton,
  Tag
} from '../components';
import { DataGridItemValue } from '../components/Molecules/DataGrid/DataGrid';
import { DeleteIcon } from '../svgIcons/Actions';

export default {
  title: 'Molecules/DataGrid',
  component: DataGrid
} as ComponentMeta<typeof DataGrid>;

const Template: ComponentStory<typeof DataGrid> = (args) => <DataGrid {...args} />;
const DecisionListMock = [
  {
    id: '1',
    titleTag: (
      <Tag
        label={
          <a className={'link'} href="#">
            1 správa
          </a>
        }
      />
    ),
    title: 'NCZI',
    text: 'Výsledok AG testu - negatívny',
    date: '15.4.2022',
    inactive: false,
    tags: <Tag label="Dôležité" />
  },
  {
    id: '2',
    titleTag: (
      <Tag
        label={
          <a className={'link'} href="#">
            3 správy
          </a>
        }
      />
    ),
    title: 'NCZI',
    text: 'Výsledok AG testu - pozitívny',
    date: '12.6.2022',
    inactive: true,
    tags: (
      <>
        <Tag label="Dôležité" />
        <Tag label="Potrebné vyzdvihnúť" />
      </>
    )
  },
  {
    id: '3',
    title: 'Sociálna poisťovňa',
    text: 'Potvrdenie o doručení správy',
    date: '15.6.2022',
    inactive: true,
    tags: <Tag label="Potrebné vyzdvihnúť" />
  }
];

export const DecisionList = Template.bind({});
DecisionList.args = {
  checkboxEverything: true,
  headItems: (
    <>
      <DataGridItemValue>Odosielateľ</DataGridItemValue>
      <DataGridItemValue className="tb2:flex hidden" align="right">
        Štítky
      </DataGridItemValue>
      <DataGridItemValue className="tb2:min-w-[10.375rem] tb2:max-w-[10.375rem]" align="right">
        Dátum
      </DataGridItemValue>
    </>
  ),
  children: DecisionListMock.map((gridItem) => (
    <DataGridItem
      checkbox={true}
      active={!gridItem.inactive}
      key={gridItem.id}
      moreOptions={[
        <p key={1}>Exportovať</p>,
        <p key={2}>Archivovať</p>,
        <p key={3}>Sprievodca schránkou</p>,
        <p key={4}>Zobraziť detail</p>
      ]}
    >
      <DataGridItemValue>
        <div>
          <div className="flex gap-2.5 items-center min-h-[2.375rem]">
            <div className={!gridItem.inactive ? 'font-bold' : ''}>{gridItem.title}</div>
            {gridItem.titleTag}
          </div>
          {gridItem.text}
        </div>
      </DataGridItemValue>
      <DataGridItemValue align="right" className="tb2:flex hidden flex-wrap justify-end gap-2.5">
        {gridItem.tags}
      </DataGridItemValue>
      <DataGridItemValue align="right" className="tb2:min-w-[10.375rem] tb2:max-w-[10.375rem]">
        {gridItem.date}
      </DataGridItemValue>
    </DataGridItem>
  ))
};

export const DecisionSharingList = Template.bind({});
DecisionSharingList.args = {
  headItems: (
    <>
      <DataGridItemValue information="Random information">
        Číslo schránky/IČO/e-mail
      </DataGridItemValue>
      <DataGridItemValue information="Another random information">
        Obmedzenie prístupu
      </DataGridItemValue>
      <DataGridItemValue align="right" className="flex-none">
        Akcie
      </DataGridItemValue>
    </>
  ),
  children: (
    <>
      <DataGridItem>
        <DataGridItemValue>
          <Input fullWidth={true} />
        </DataGridItemValue>
        <DataGridItemValue>
          <Input placeholder="select not ready" />
        </DataGridItemValue>
        <DataGridItemValue align="right" className="flex-none min-w-[6rem]">
          <PrimaryButton>Pridať</PrimaryButton>
        </DataGridItemValue>
      </DataGridItem>
      <DataGridItem
        moreOptions={[
          <p key={1}>Exportovať</p>,
          <p key={2}>Archivovať</p>,
          <p key={3}>Sprievodca schránkou</p>,
          <p key={4}>Zobraziť detail</p>
        ]}
      >
        <DataGridItemValue>
          <Input fullWidth={true} />
        </DataGridItemValue>
        <DataGridItemValue>
          <Input placeholder="select not ready" />
          <DateInput />
        </DataGridItemValue>
        <DataGridItemValue align="right" className="flex-none min-w-[6rem]">
          <IconLink>
            <DeleteIcon width="1.8rem" height="1.8rem" color="red" className="text-alert-warning" />
          </IconLink>
        </DataGridItemValue>
      </DataGridItem>
    </>
  )
};
