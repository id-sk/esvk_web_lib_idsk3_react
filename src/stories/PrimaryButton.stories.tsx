import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimaryButton } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';
import { PlaceholderIcon } from '../components/Icons';
import { CheckCircleIcon, ReportProblemIcon } from '../components/Icons/Actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/PrimaryButton',
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
  icon: <PlaceholderIcon />,
  onClick: () => console.log('button clicked!')
};

export const PrimarySuccessWithIcon = Template.bind({});
PrimarySuccessWithIcon.args = {
  label: 'Primary / Success',
  variant: 'success',
  icon: <CheckCircleIcon />,
  iconPosition: 'right',
  onClick: () => console.log('button clicked!')
};

export const PrimaryWarningWithIcon = Template.bind({});
PrimaryWarningWithIcon.args = {
  label: 'Primary / Warning',
  variant: 'warning',
  icon: <ReportProblemIcon />,
  onClick: () => console.log('button clicked!')
};
