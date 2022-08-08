import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DateInput from '../components/Atoms/DateInput';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/DateInput',
  component: DateInput
} as ComponentMeta<typeof DateInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DateInput> = (args) => <DateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'This is label',
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok'
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  label: 'This is label',
  caption: 'This is caption',
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok'
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  label: 'This is label',
  caption: 'This is caption',
  subtitle: 'This is very long subtitle',
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok'
};

export const WithoutYear = Template.bind({});
WithoutYear.args = {
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  hideYear: true
};

export const ErrorFormat = Template.bind({});
ErrorFormat.args = {
  label: 'This is label',
  error: true,
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok'
};
