import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import { Toggle } from '../components';

export default {
  title: 'Atoms/Toggle',
  component: Toggle
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;
export const Large = Template.bind({});
Large.args = {};
export const LargeWithLabel = Template.bind({});
LargeWithLabel.args = {
  label: 'Text label'
};
export const SmallWithLabel = Template.bind({});
SmallWithLabel.args = {
  inputSize: 'small',
  label: 'Text label'
};
export const Small = Template.bind({});
Small.args = {
  inputSize: 'small'
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Text label'
};
export const DisabledAndChecked = Template.bind({});
DisabledAndChecked.args = {
  disabled: true,
  checked: true
};
