import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Bell } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Bell',
  component: Bell
} as ComponentMeta<typeof Bell>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Bell> = (args) => <Bell {...args} />;

export const Default = Template.bind({});
Default.args = {
  alert: true
};
