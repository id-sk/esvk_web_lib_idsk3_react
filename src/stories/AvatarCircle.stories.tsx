import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarCircle } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/AvatarCircle',
  component: AvatarCircle
} as ComponentMeta<typeof AvatarCircle>;

const Template: ComponentStory<typeof AvatarCircle> = (args) => <AvatarCircle {...args} />;

export const Default = Template.bind({});
Default.args = {
  firstName: 'Janko',
  lastName: 'Hraško'
};
