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
const Template: ComponentStory<typeof DropDown> = (args) => (
  <div className="ml-8">
    <DropDown {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  dropDownTitle: 'slovenčina',
  children: [<a href="/">english</a>, <a href="/">український</a>]
};

export const CustomArrowIcon = Template.bind({});
CustomArrowIcon.args = {
  dropDownTitle: 'slovenčina',
  children: [<a href="/">english</a>, <a href="/">український</a>],
  arrowIcon: <ExpandMoreIcon width="1.5rem" height="1.5rem" />
};

export const LeftSideOptions = Template.bind({});
LeftSideOptions.args = {
  dropDownTitle: 'slovenčina',
  optionsSide: 'left',
  children: [<a href="/">english</a>, <a href="/">український</a>]
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  dropDownTitle: 'Menu',
  children: [
    <a href="/">Exportovať</a>,
    <a href="/">Archivovať</a>,
    <hr />,
    <a href="/">Sprievodca schránkou</a>,
    <a href="/">Zobraziť detail</a>,
    <hr />,
    <a href="/">Pomoc</a>
  ]
};
