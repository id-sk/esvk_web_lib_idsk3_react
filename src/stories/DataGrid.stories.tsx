import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import {
  DataGrid,
  DataGridRow,
  DataGridRowValue,
  DateInput,
  IconLink,
  Input,
  PrimaryButton,
  Tag
} from '../components';
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
  headRow: (
    <>
      <DataGridRowValue>Odosielateľ</DataGridRowValue>
      <DataGridRowValue className="tb2:flex hidden" align="right">
        Štítky
      </DataGridRowValue>
      <DataGridRowValue className="tb2:min-w-[10.375rem] tb2:max-w-[10.375rem]" align="right">
        Dátum
      </DataGridRowValue>
    </>
  ),
  children: DecisionListMock.map((gridItem) => (
    <DataGridRow
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
      <DataGridRowValue>
        <div>
          <div className="flex gap-2.5 items-center min-h-[2.375rem]">
            <div className={!gridItem.inactive ? 'font-bold' : ''}>{gridItem.title}</div>
            {gridItem.titleTag}
          </div>
          {gridItem.text}
        </div>
      </DataGridRowValue>
      <DataGridRowValue align="right" className="tb2:flex hidden flex-wrap justify-end gap-2.5">
        {gridItem.tags}
      </DataGridRowValue>
      <DataGridRowValue align="right" className="tb2:min-w-[10.375rem] tb2:max-w-[10.375rem]">
        {gridItem.date}
      </DataGridRowValue>
    </DataGridRow>
  ))
};

export const DecisionSharingList = Template.bind({});
DecisionSharingList.args = {
  headRow: (
    <>
      <DataGridRowValue information="Random information">
        Číslo schránky/IČO/e-mail
      </DataGridRowValue>
      <DataGridRowValue information="Another random information">
        Obmedzenie prístupu
      </DataGridRowValue>
      <DataGridRowValue align="right" className="flex-none min-w-[6rem]">
        Akcie
      </DataGridRowValue>
    </>
  ),
  children: (
    <>
      <DataGridRow>
        <DataGridRowValue>
          <Input fullWidth={true} />
        </DataGridRowValue>
        <DataGridRowValue>
          <Input placeholder="select not ready" />
        </DataGridRowValue>
        <DataGridRowValue align="right" className="flex-none min-w-[6rem]">
          <PrimaryButton>Pridať</PrimaryButton>
        </DataGridRowValue>
      </DataGridRow>
      <DataGridRow
        moreOptions={[
          <p key={1}>Exportovať</p>,
          <p key={2}>Archivovať</p>,
          <p key={3}>Sprievodca schránkou</p>,
          <p key={4}>Zobraziť detail</p>
        ]}
      >
        <DataGridRowValue>
          <Input fullWidth={true} />
        </DataGridRowValue>
        <DataGridRowValue>
          <Input placeholder="select not ready" />
          <DateInput />
        </DataGridRowValue>
        <DataGridRowValue align="right" className="flex-none min-w-[6rem]">
          <IconLink>
            <DeleteIcon width="1.8rem" height="1.8rem" color="red" className="text-alert-warning" />
          </IconLink>
        </DataGridRowValue>
      </DataGridRow>
    </>
  )
};
