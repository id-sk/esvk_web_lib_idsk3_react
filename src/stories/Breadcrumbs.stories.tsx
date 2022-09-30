import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Breadcrumbs',
  component: Breadcrumbs
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<a href="#">Section 1</a>, <a href="#">Section 2</a>, <a href="#">Section 3</a>]
};
export const CustomHomeLink = Template.bind({});
CustomHomeLink.args = {
  homeLink: <button>Home</button>,
  children: [<a href="#">Section 1</a>, <a href="#">Section 2</a>, <a href="#">Section 3</a>]
};
