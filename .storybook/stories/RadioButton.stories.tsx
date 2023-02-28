import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButton } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton
} as ComponentMeta<typeof RadioButton>;
const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Text label' };

export const Small = Template.bind({});
Small.args = {
  inputSize: 'small',
  label: 'Text label'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Text label'
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
  label: 'Text label'
};
