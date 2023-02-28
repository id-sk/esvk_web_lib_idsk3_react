import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div>
    <Checkbox {...args} id="1" />
    <Checkbox {...args} id="2" />
    <Checkbox {...args} id="3" />
    <Checkbox {...args} id="4" />
  </div>
);
export const Default = Template.bind({});
Default.args = {};
export const Small = Template.bind({});
Small.args = {
  inputSize: 'small'
};
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
