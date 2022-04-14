import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SecondaryButton } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';
import { PlaceholderIcon } from '../components/Icons';
import { CheckCircleIcon, ReportProblemIcon } from '../components/Icons/Actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SecondaryButton',
  component: SecondaryButton
} as ComponentMeta<typeof SecondaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecondaryButton> = (args) => <SecondaryButton {...args} />;

export const SecondaryBasic = Template.bind({});
SecondaryBasic.args = {
  label: 'Secondary / Basic',
  onClick: () => console.log('button clicked!')
};

export const SecondaryBasicWithIcon = Template.bind({});
SecondaryBasicWithIcon.args = {
  label: 'Secondary / Basic',
  icon: <PlaceholderIcon />,
  onClick: () => console.log('button clicked!')
};

export const SecondaryContrastWithIcon = Template.bind({});
SecondaryContrastWithIcon.args = {
  label: 'Secondary / Contrast',
  variant: 'contrast',
  icon: <PlaceholderIcon />,
  onClick: () => console.log('button clicked!')
};

export const SecondarySuccessWithIcon = Template.bind({});
SecondarySuccessWithIcon.args = {
  label: 'Secondary / Success',
  variant: 'success',
  icon: <CheckCircleIcon />,
  iconPosition: 'right',
  onClick: () => console.log('button clicked!')
};

export const SecondaryWarningWithIcon = Template.bind({});
SecondaryWarningWithIcon.args = {
  label: 'Secondary / Warning',
  variant: 'warning',
  icon: <ReportProblemIcon />,
  onClick: () => console.log('button clicked!')
};
