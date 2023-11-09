import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DateInput from '../../src/components/Atoms/DateInput';
import '/src/styles/idsk3_theme.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import sk from 'date-fns/locale/sk';

registerLocale('sk', sk);
setDefaultLocale('sk');

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/DateInput',
  component: DateInput
} as ComponentMeta<typeof DateInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DateInput> = (args) => <DateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'date-input',
  placeholder: 'Placeholder',
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok',
  dayPlaceholder: 'DD',
  monthPlaceholder: 'MM',
  yearPlaceholder: 'RRRR',
  datePickerLabel: 'Otvoriť kalendár',
  datePickerProps: {
    nextMonthAriaLabel: 'Nasledujúci mesiac',
    previousMonthAriaLabel: 'Predchádzajúci mesiac'
  },
  datePickerTooltip: 'Vybrať dátum',
  onValueUpdate: (value: string) => console.log('date update', value),
  onRevalidation: (hasError: boolean) => console.log(`Has internal error: ${hasError}`)
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: 'date-input',
  label: 'This is label',
  inputLabelsSrOnly: true,
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok',
  dayPlaceholder: 'DD',
  monthPlaceholder: 'MM',
  yearPlaceholder: 'RRRR',
  datePickerLabel: 'Otvoriť kalendár',
  datePickerProps: {
    nextMonthAriaLabel: 'Nasledujúci mesiac',
    previousMonthAriaLabel: 'Predchádzajúci mesiac'
  },
  onValueUpdate: (value: string) => console.log('date update', value)
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  id: 'date-input',
  label: 'This is label',
  caption: 'This is caption',
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok',
  dayPlaceholder: 'DD',
  monthPlaceholder: 'MM',
  yearPlaceholder: 'RRRR',
  datePickerLabel: 'Otvoriť kalendár',
  onValueUpdate: (value: string) => console.log('date update', value)
};

export const Optional = Template.bind({});
Optional.args = {
  id: 'date-input',
  label: 'This is label',
  optionalText: '(Optional)',
  caption: 'This is caption',
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok',
  dayPlaceholder: 'DD',
  monthPlaceholder: 'MM',
  yearPlaceholder: 'RRRR',
  datePickerLabel: 'Otvoriť kalendár',
  onValueUpdate: (value: string) => console.log('date update', value)
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  id: 'date-input',
  label: 'This is label',
  caption: 'This is caption',
  subtitle: 'This is very long subtitle',
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok',
  dayPlaceholder: 'DD',
  monthPlaceholder: 'MM',
  yearPlaceholder: 'RRRR',
  datePickerLabel: 'Otvoriť kalendár',
  onValueUpdate: (value: string) => console.log('date update', value)
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'date-input',
  disabled: true,
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok',
  dayPlaceholder: 'DD',
  monthPlaceholder: 'MM',
  yearPlaceholder: 'RRRR',
  datePickerLabel: 'Otvoriť kalendár',
  onValueUpdate: (value: string) => console.log('date update', value)
};

export const WithoutYear = Template.bind({});
WithoutYear.args = {
  id: 'date-input',
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  hideYear: true,
  dayPlaceholder: 'DD',
  monthPlaceholder: 'MM',
  datePickerLabel: 'Otvoriť kalendár',
  onValueUpdate: (value: string) => console.log('date update', value)
};

export const ErrorFormat = Template.bind({});
ErrorFormat.args = {
  id: 'date-input',
  label: 'This is label',
  error: true,
  errorMsg: 'Bad format of date',
  dayLabel: 'Deň',
  monthLabel: 'Mesiac',
  yearLabel: 'Rok',
  dayPlaceholder: 'DD',
  monthPlaceholder: 'MM',
  yearPlaceholder: 'RRRR',
  datePickerLabel: 'Otvoriť kalendár',
  onValueUpdate: (value: string) => console.log('date update', value)
};
