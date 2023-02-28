import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarCircle } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';
import Group from '../../src/svgIcons/Social/Group';

export default {
  title: 'Atoms/AvatarCircle',
  component: AvatarCircle
} as ComponentMeta<typeof AvatarCircle>;

const Template: ComponentStory<typeof AvatarCircle> = (args) => <AvatarCircle {...args} />;

export const Initials = Template.bind({});
Initials.args = {
  firstName: 'Janko',
  lastName: 'Hraško'
};

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  firstName: 'Janko',
  lastName: 'Hraško',
  circleContent: 'icon'
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  firstName: 'Janko',
  lastName: 'Hraško',
  circleContent: <Group />
};

export const Image = Template.bind({});
Image.args = {
  firstName: 'Janko',
  lastName: 'Hraško',
  circleContent: (
    <img
      src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      alt="Profile picture example"
    />
  )
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  firstName: 'Janka',
  lastName: 'Hrašková',
  circleContent: (
    <img
      src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      alt="img"
    />
  ),
  caption: 'Fyzická osoba'
};

export const JustName = Template.bind({});
JustName.args = {
  firstName: 'Janka',
  lastName: 'Hrašková',
  circleContent: (
    <img
      src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      alt="img"
    />
  ),
  showName: true
};
