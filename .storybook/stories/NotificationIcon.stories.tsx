import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationIcon } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/NotificationIcon',
  component: NotificationIcon
} as ComponentMeta<typeof NotificationIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotificationIcon> = (args) => <NotificationIcon {...args} />;

export const NotAlerted = Template.bind({});
NotAlerted.args = {};

export const Alerted = Template.bind({});
Alerted.args = {
  alert: true
};
