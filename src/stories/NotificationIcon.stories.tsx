import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationIcon } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/NotificationIcon',
  component: NotificationIcon
} as ComponentMeta<typeof NotificationIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotificationIcon> = (args) => <NotificationIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  alert: true
};
