import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButton } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <div>
    <RadioButton {...args} id={'1'}></RadioButton>
    <RadioButton {...args} id={'2'}></RadioButton>
    <RadioButton {...args} id={'3'}></RadioButton>
  </div>
);
export const Default = Template.bind({});
Default.args = {};
export const WithLabel = Template.bind({});
WithLabel.args = {
  children: 'Text label'
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
export const DisabledWithLabel = Template.bind({});
DisabledWithLabel.args = {
  disabled: true,
  children: 'Text label'
};
