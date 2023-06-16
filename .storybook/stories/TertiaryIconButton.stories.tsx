import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import { PlaceholderIcon } from '../../src/svgIcons';
import { CheckCircleIcon, ReportProblemIcon } from '../../src/svgIcons/Actions';
import TertiaryIconButton from '../../src/components/Atoms/Button/TertiaryIconButton';

export default {
  title: 'Atoms/TertiaryIconButton',
  component: TertiaryIconButton
} as ComponentMeta<typeof TertiaryIconButton>;

const Template: ComponentStory<typeof TertiaryIconButton> = (args) => (
  <TertiaryIconButton {...args} />
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

export const NeutralVariant = Template.bind({});
NeutralVariant.args = {
  variant: 'neutral',
  size: 'large',
  icon: <PlaceholderIcon />,
  onClick: () => console.log('button clicked!')
};
