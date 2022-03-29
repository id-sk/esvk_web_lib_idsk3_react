import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../components/Atoms/Input';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Input',
  component: Input
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'This is label',
  placeholder: 'Placeholder',
  errorMsg: 'This is error message'
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
