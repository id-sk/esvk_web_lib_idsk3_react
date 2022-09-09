import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import {
  DropDown,
  HorizontalNavigation,
  HorizontalNavigationGroup,
  HorizontalNavigationItem
} from '../components';
import FolderOpen from '../svgIcons/File/FolderOpen';
import OutlinedFlag from '../svgIcons/Content/OutlinedFlag';
import FilterList from '../svgIcons/Content/FilterList';
import { ExpandMoreIcon } from '../svgIcons/Navigation';
import DeleteOutline from '../svgIcons/Actions/DeleteOutline';
import MarkEmailRead from '../svgIcons/Communication/MarkEmailRead';

export default {
  title: 'Molecules/HorizontalNavigation',
  component: HorizontalNavigation
} as ComponentMeta<typeof HorizontalNavigation>;

const Template: ComponentStory<typeof HorizontalNavigation> = (args) => (
  <HorizontalNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <HorizontalNavigationItem icon={<FolderOpen />} label="Priečinky" />
      <HorizontalNavigationItem icon={<OutlinedFlag />} label="Štítky" />
      <HorizontalNavigationItem icon={<FilterList />} label="Filtrovanie" />
    </>
  )
};

export const Group = Template.bind({});
Group.args = {
  children: (
    <>
      <HorizontalNavigationGroup>
        <HorizontalNavigationItem
          icon={<DeleteOutline />}
          label="Odstrániť"
          className="text-alert-warning"
        />
        <HorizontalNavigationItem icon={<FolderOpen />} label="Presunúť" />
        <HorizontalNavigationItem icon={<MarkEmailRead />} label="Označiť ako prečítané" />
      </HorizontalNavigationGroup>

      <HorizontalNavigationItem icon={<FilterList />} label="Filtrovanie" />

      <DropDown
        dropDownTitle="Viac"
        arrowIcon={<ExpandMoreIcon width="1.5rem" height="1.5rem" />}
        className="ml-auto"
        optionsSide="left"
      >
        <button>Ďalšia položka</button>
        <button>A ešte jedna</button>
      </DropDown>
    </>
  )
};

export const Tabs = Template.bind({});
Tabs.args = {
  children: (
    <>
      <HorizontalNavigationGroup>
        <HorizontalNavigationItem label="Prijaté" active={true} />
        <HorizontalNavigationItem label="Odoslané" />
        <HorizontalNavigationItem label="Rozpracované" />
        <HorizontalNavigationItem label="Kôš" />
      </HorizontalNavigationGroup>

      <HorizontalNavigationItem icon={<FolderOpen />} label="Priečinky" />
      <HorizontalNavigationItem icon={<OutlinedFlag />} label="Štítky" />
      <HorizontalNavigationItem icon={<FilterList />} label="Filtrovanie" />

      <DropDown
        dropDownTitle="Viac"
        arrowIcon={<ExpandMoreIcon width="1.5rem" height="1.5rem" />}
        className="ml-auto"
        optionsSide="left"
      >
        <button>Ďalšia položka</button>
        <button>A ešte jedna</button>
      </DropDown>
    </>
  )
};
