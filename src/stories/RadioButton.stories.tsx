import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButton } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';
import { RadioButtonGroup } from '../components';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton
} as ComponentMeta<typeof RadioButton>;
const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButtonGroup>
    <RadioButton {...args} id="1" />
    <RadioButton {...args} id="2" />
    <RadioButton {...args} id="3" />
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
export const DisabledWithLabel = Template.bind({});
DisabledWithLabel.args = {
  disabled: true,
  label: 'Text label'
};
