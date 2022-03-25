import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimaryButton } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';
import { PlaceholderIcon } from '../components/Icons';
import { CheckCircle, ReportProblem } from '../components/Icons/Actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/PrimaryButton',
  component: PrimaryButton
} as ComponentMeta<typeof PrimaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;

export const PrimaryBasic = Template.bind({});
PrimaryBasic.args = {
  label: 'Primary / Basic',
  onClick: () => console.log('button clicked!')
};

export const PrimaryBasicWithIcon = Template.bind({});
PrimaryBasicWithIcon.args = {
  label: 'Primary / Basic',
  icon: <PlaceholderIcon />
};

export const PrimarySuccess = Template.bind({});
PrimarySuccess.args = {
  label: 'Primary / Success',
  variant: 'success'
};

export const PrimarySuccessWithIcon = Template.bind({});
PrimarySuccessWithIcon.args = {
  label: 'Primary / Success',
  variant: 'success',
  icon: <CheckCircle />
};

export const PrimaryWarning = Template.bind({});
PrimaryWarning.args = {
  label: 'Primary / Warning',
  variant: 'warning'
};

export const PrimaryWarningWithIcon = Template.bind({});
PrimaryWarningWithIcon.args = {
  label: 'Primary / Warning',
  variant: 'warning',
  icon: <ReportProblem />
};
