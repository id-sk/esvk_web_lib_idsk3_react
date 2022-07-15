import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataGrid } from '../components/Molecules';
import { DataGridGroup } from '../components/Molecules/DataGrid/DataGrid';
import '/src/styles/idsk3_theme.css';
import { Tag } from '../components';

export default {
  title: 'Molecules/DataGrid',
  component: DataGrid
} as ComponentMeta<typeof DataGrid>;

const Template: ComponentStory<typeof DataGrid> = (args) => {
  const mock = [
    { id: '1', title: 'Výsledok AG testu - negatívny', inactive: false },
    { id: '2', title: 'Výsledok AG testu - negatívny', inactive: true },
    { id: '3', title: 'Výsledok AG testu - negatívny', inactive: true }
  ];
  const [selection, setSelection] = React.useState<{ [key: string]: boolean }>({});
  const isCheckAll = () => {
    return Object.values(mock).length === Object.values(selection).filter((e) => !!e).length;
  };

  const handleSelectAll = (selected: boolean) => {
    if (selected) {
      const newSelection: { [key: string]: boolean } = {};
      for (const element of mock) {
        newSelection[element.id] = true;
      }
      setSelection(newSelection);
    } else {
      setSelection({});
    }
  };

  const handleClick = (e: React.FormEvent<HTMLInputElement>, dataGridId: string) => {
    const newSelection = { ...selection, [dataGridId]: e.currentTarget.checked };
    setSelection(newSelection);
  };
  return (
    <DataGridGroup {...args} checked={isCheckAll()} onSelectAllCheck={handleSelectAll}>
      {mock.map((gridItem) => (
        <DataGrid
          {...args}
          inactive={gridItem.inactive}
          key={gridItem.id}
          checked={selection[gridItem.id]}
          onChange={(e) => handleClick(e, gridItem.id)}
        >
          {gridItem.title}
        </DataGrid>
      ))}
    </DataGridGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'NCZI',
  date: '15.6.2022',
  titleTag: (
    <Tag
      label={
        <a className={'link'} href="#">
          3 správy
        </a>
      }
    ></Tag>
  ),
  tagList: [<Tag label="Dôležité"></Tag>, <Tag label="Potrebné vyzdvihnúť"></Tag>]
};
