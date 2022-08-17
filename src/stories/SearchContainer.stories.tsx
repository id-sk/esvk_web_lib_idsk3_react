import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchContainer } from '../components';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/SearchContainer',
  component: SearchContainer
} as ComponentMeta<typeof SearchContainer>;

const Template: ComponentStory<typeof SearchContainer> = (args) => <SearchContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Search',
  placeholder: 'Placeholder',
  searchButton: {
    label: 'Search'
  },
  advancedSearchButton: {
    label: 'Advanced search'
  }
};