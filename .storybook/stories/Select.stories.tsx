import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlaceholderIcon } from '../../src/svgIcons';
import '/src/styles/idsk3_theme.css';
import Select from '../../src/components/Atoms/Select/Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Select',
  component: Select
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <option value="1">Some really random option</option>
    <option value="2">Some another option</option>
    <option value="3">This is nice option</option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Select some option'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <PlaceholderIcon />
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'This is label'
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  label: 'This is label',
  caption: 'This is caption',
  errorMsg: 'This is error message'
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  label: 'This is label',
  caption: 'This is caption',
  subtitle: 'This is very long subtitle',
  errorMsg: 'This is error message'
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label: 'This is label',
  error: true,
  errorMsg: 'This is error message'
};
