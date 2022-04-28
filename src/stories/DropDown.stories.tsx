import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropDown } from '../components/Atoms';
import { ExpandMoreIcon } from '../svgIcons/Navigation';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/DropDown',
  component: DropDown
} as ComponentMeta<typeof DropDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  dropDownTitle: 'slovenčina',
  children: [<a href="/">english</a>, <a href="/">український</a>]
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  dropDownTitle: 'slovenčina',
  children: [<a href="/">english</a>, <a href="/">український</a>],
  arrowIcon: <ExpandMoreIcon width="1.5rem" height="1.5rem" />
};
