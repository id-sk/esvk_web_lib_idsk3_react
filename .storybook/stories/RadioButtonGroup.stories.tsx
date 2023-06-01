import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButtonGroup, RadioButton } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/RadioButtonGroup',
  component: RadioButtonGroup
} as ComponentMeta<typeof RadioButtonGroup>;
const Template: ComponentStory<typeof RadioButtonGroup> = (args) => (
  <RadioButtonGroup {...args}>
    <RadioButton label="Text label 1" />
    <RadioButton label="Text label 2" />
    <RadioButton label="Text label 3" />
    <RadioButton label="Text label 4" />
  </RadioButtonGroup>
);

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Text label'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Mandatory = Template.bind({});
Mandatory.args = {
  label: 'Text label',
  mandatory: true
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Text label',
  mandatory: true,
  error: true,
  errorMsg: 'Toto pole je povinné'
};
