import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import { Tag } from '../components/Atoms';
import { PlaceholderIcon } from '../svgIcons';

export default {
  title: 'Atoms/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: 'Text'
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