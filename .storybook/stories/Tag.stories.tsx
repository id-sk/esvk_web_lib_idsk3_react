import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import { Tag } from '../../src/components/Atoms';
import { PlaceholderIcon } from '../../src/svgIcons';

export default {
  title: 'Atoms/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
export const Static = Template.bind({});
Static.args = {
  label: 'Static tag'
};

export const Intractable = Template.bind({});
Intractable.args = {
  label: 'You can hover this',
  interaction: true
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Selected tag',
  interaction: true,
  selected: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small tag',
  size: 'small'
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: 'Text',
  leftIcon: <PlaceholderIcon />
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: 'Text',
  rightIcon: <PlaceholderIcon />
};

export const LeftAndRightIcons = Template.bind({});
LeftAndRightIcons.args = {
  label: 'Text',
  leftIcon: <PlaceholderIcon />,
  rightIcon: <PlaceholderIcon />
};

export const BasicVariant = Template.bind({});
BasicVariant.args = {
  label: 'Basic',
  variant: 'basic',
  leftIcon: <PlaceholderIcon />
};

export const WarningVariant = Template.bind({});
WarningVariant.args = {
  label: 'Warning',
  variant: 'warning',
  leftIcon: <PlaceholderIcon />
};

export const SuccessVariant = Template.bind({});
SuccessVariant.args = {
  label: 'Success',
  variant: 'success',
  leftIcon: <PlaceholderIcon />
};

export const AttentionVariant = Template.bind({});
AttentionVariant.args = {
  label: 'Attention',
  variant: 'attention',
  leftIcon: <PlaceholderIcon />
};
