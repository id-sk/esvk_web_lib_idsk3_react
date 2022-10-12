import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import { PlaceholderIcon } from '../svgIcons';
import { CheckCircleIcon, ReportProblemIcon } from '../svgIcons/Actions';
import { SecondaryIconButton } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SecondaryIconButton',
  component: SecondaryIconButton
} as ComponentMeta<typeof SecondaryIconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecondaryIconButton> = (args) => (
  <SecondaryIconButton {...args} />
);

export const MediumBasicVariant = Template.bind({});
MediumBasicVariant.args = {
  icon: <PlaceholderIcon />,
  onClick: () => console.log('button clicked!')
};

export const LargeBasicVariant = Template.bind({});
LargeBasicVariant.args = {
  icon: <PlaceholderIcon />,
  size: 'large',
  onClick: () => console.log('button clicked!')
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <PlaceholderIcon />,
  size: 'large',
  disabled: true,
  onClick: () => console.log('button clicked!')
};

export const SuccessVariant = Template.bind({});
SuccessVariant.args = {
  variant: 'success',
  size: 'large',
  icon: <CheckCircleIcon />,
  onClick: () => console.log('button clicked!')
};

export const WarningVariant = Template.bind({});
WarningVariant.args = {
  variant: 'warning',
  size: 'large',
  icon: <ReportProblemIcon />,
  onClick: () => console.log('button clicked!')
};

export const ContrastVariant = Template.bind({});
ContrastVariant.args = {
  variant: 'contrast',
  size: 'large',
  icon: <ReportProblemIcon />,
  onClick: () => console.log('button clicked!')
};
