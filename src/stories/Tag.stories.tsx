import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import { Tag } from '../components/Atoms';

export default {
  title: 'Atoms/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: 'Doklady'
};
