import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from '../components/Atoms/Input/index';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'This is label',
  placeholder: 'Placeholder'
};

export const Optional = Template.bind({});
Optional.args = {
  label: 'This is label',
  placeholder: 'Placeholder',
  optionalText: '(nepovinné)'
};

export const Mandatory = Template.bind({});
Mandatory.args = {
  label: 'This is label',
  placeholder: 'Placeholder',
  mandatory: true
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  label: 'This is label',
  caption: 'This is caption',
  placeholder: 'Placeholder',
  errorMsg: 'This is error message'
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  label: 'This is label',
  caption: 'This is caption',
  subtitle: 'This is very long subtitle',
  placeholder: 'Placeholder',
  errorMsg: 'This is error message'
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label: 'This is label',
  placeholder: 'Placeholder',
  error: true,
  errorMsg: 'This is error message'
};
