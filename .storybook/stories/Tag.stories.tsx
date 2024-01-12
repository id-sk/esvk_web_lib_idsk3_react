import React, { useState } from 'react';
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
  label: 'Static tag',
  type: 'static'
};

export const Select = Template.bind({});
Select.args = {
  label: 'Selectable tag',
  type: 'select'
};

export const Action = Template.bind({});
Action.args = {
  label: 'Action tag',
  type: 'action'
};

export const Filter = Template.bind({});
Filter.args = {
  label: 'Selected tag',
  type: 'filter'
};

export const Custom = Template.bind({});
Custom.args = {
  label: 'Custom colors',
  type: 'static',
  colors: {
    color: '#fc0384',
    background: '#b8a3c9',
    border: '#5328ed'
  }
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
